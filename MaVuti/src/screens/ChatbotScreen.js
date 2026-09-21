import React, { useState } from 'react';
import { FlatList, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getVutAnswer } from '../data/vutKnowledgeBase';

const SUGGESTIONS = ['How do I apply?', 'What are the IT requirements?', 'How does registration work?', 'How do residences work?', 'Where can I find sport information?'];

const WELCOME = {
  id: 'welcome',
  role: 'bot',
  text: 'Hello. I am Ask VUT. I answer from the approved VUT sources in this app. Try a question about applications, requirements, registration, accommodation, sport or VUT contacts.',
};

export default function ChatbotScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([WELCOME]);

  const sendMessage = (value = message) => {
    const question = value.trim();
    if (!question) return;
    const result = getVutAnswer(question);
    setMessages((current) => [...current, { id: `user-${Date.now()}`, role: 'user', text: question }, { id: `bot-${Date.now()}`, role: 'bot', text: result.answer, source: result.source }]);
    setMessage('');
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <View style={styles.notice}><Text style={styles.noticeText}>Answers are limited to approved VUT sources. Confirm dates, fees and requirements on the linked official page.</Text></View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messages}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.role === 'user' ? styles.userBubble : styles.botBubble]}>
            <Text style={[styles.messageText, item.role === 'user' ? styles.userText : styles.botText]}>{item.text}</Text>
            {item.source ? <TouchableOpacity onPress={() => Linking.openURL(item.source.url)}><Text style={styles.source}>Source: {item.source.label}</Text></TouchableOpacity> : null}
          </View>
        )}
        ListHeaderComponent={<View style={styles.suggestions}>{SUGGESTIONS.map((item) => <TouchableOpacity key={item} style={styles.chip} onPress={() => sendMessage(item)}><Text style={styles.chipText}>{item}</Text></TouchableOpacity>)}</View>}
      />
      <View style={styles.composer}><TextInput value={message} onChangeText={setMessage} placeholder="Ask a VUT question" placeholderTextColor="#6C757D" style={styles.input} onSubmitEditing={() => sendMessage()} returnKeyType="send" /><TouchableOpacity style={styles.send} onPress={() => sendMessage()}><Text style={styles.sendText}>Send</Text></TouchableOpacity></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8F9FA' }, notice: { backgroundColor: '#E6F0F5', paddingHorizontal: 16, paddingVertical: 10 }, noticeText: { color: '#002B49', fontSize: 12, lineHeight: 17 }, messages: { padding: 16 }, suggestions: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 12 }, chip: { backgroundColor: '#FFFFFF', borderColor: '#FF8200', borderRadius: 16, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 7 }, chipText: { color: '#002B49', fontSize: 12, fontWeight: '600' }, bubble: { borderRadius: 14, marginBottom: 10, maxWidth: '88%', padding: 12 }, userBubble: { alignSelf: 'flex-end', backgroundColor: '#002B49' }, botBubble: { alignSelf: 'flex-start', backgroundColor: '#FFFFFF', borderColor: '#E9ECEF', borderWidth: 1 }, messageText: { fontSize: 14, lineHeight: 20 }, userText: { color: '#FFFFFF' }, botText: { color: '#1A1A1A' }, source: { color: '#0078A8', fontSize: 12, fontWeight: '600', marginTop: 9, textDecorationLine: 'underline' }, composer: { backgroundColor: '#FFFFFF', borderTopColor: '#E9ECEF', borderTopWidth: 1, flexDirection: 'row', gap: 8, padding: 12 }, input: { backgroundColor: '#F1F3F5', borderRadius: 20, color: '#1A1A1A', flex: 1, paddingHorizontal: 14 }, send: { alignItems: 'center', backgroundColor: '#FF8200', borderRadius: 20, justifyContent: 'center', paddingHorizontal: 16 }, sendText: { color: '#FFFFFF', fontWeight: '700' },
});
