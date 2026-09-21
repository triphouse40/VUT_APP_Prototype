import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PlaceholderScreen({ route }) {
  const { title, description } = route.params || {};
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ready for your content</Text>
          <Text style={styles.cardText}>This screen is connected to the navigation structure. Add its real content here when you are ready.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8F9FA' }, content: { flex: 1, padding: 16 },
  title: { color: '#002B49', fontSize: 22, fontWeight: '700' }, description: { color: '#6C757D', fontSize: 14, lineHeight: 20, marginTop: 4 },
  card: { backgroundColor: '#FFFFFF', borderColor: '#E9ECEF', borderRadius: 12, borderWidth: 1, marginTop: 16, padding: 16 },
  cardTitle: { color: '#002B49', fontSize: 16, fontWeight: '700' }, cardText: { color: '#555555', fontSize: 14, lineHeight: 20, marginTop: 6 },
});
