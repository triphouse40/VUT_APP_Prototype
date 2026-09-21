import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SERVICES = [
  { id: 'clinic', title: 'Health Clinic', subtitle: 'Consultations, appointments and emergency contacts', targetScreen: 'Clinic' },
  { id: 'projects', title: 'Student Showcase', subtitle: 'Explore engineering, design and technology projects', targetScreen: 'Projects', badge: 'Updated' },
  { id: 'creators', title: 'VUT Creators', subtitle: 'Campus podcasters, photographers and creators', targetScreen: 'Creators' },
];

export default function ServicesHubScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Text style={styles.header}>Campus Services & Utilities</Text>
      <Text style={styles.subheader}>Open a service to access its dedicated portal.</Text>
      <FlatList data={SERVICES} keyExtractor={(item) => item.id} contentContainerStyle={styles.list} renderItem={({ item }) => (
        <TouchableOpacity style={styles.card} activeOpacity={0.75} onPress={() => navigation.navigate(item.targetScreen)}>
          <View style={styles.cardHeader}><Text style={styles.cardTitle}>{item.title}</Text>{item.badge ? <View style={styles.badge}><Text style={styles.badgeText}>{item.badge}</Text></View> : null}</View>
          <Text style={styles.cardSubtitle}>{item.subtitle}</Text><Text style={styles.open}>Open service</Text>
        </TouchableOpacity>
      )} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', paddingHorizontal: 16, paddingTop: 16 }, header: { color: '#002B49', fontSize: 20, fontWeight: '700' }, subheader: { color: '#6C757D', fontSize: 13, marginBottom: 16, marginTop: 3 }, list: { paddingBottom: 24 },
  card: { backgroundColor: '#FFFFFF', borderColor: '#E9ECEF', borderRadius: 12, borderWidth: 1, elevation: 2, marginBottom: 12, padding: 16 }, cardHeader: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }, cardTitle: { color: '#1A1A1A', fontSize: 16, fontWeight: '700' }, cardSubtitle: { color: '#555555', fontSize: 13, lineHeight: 18, marginTop: 6 }, badge: { backgroundColor: '#FF8200', borderRadius: 10, paddingHorizontal: 8, paddingVertical: 3 }, badgeText: { color: '#FFFFFF', fontSize: 10, fontWeight: '700' }, open: { color: '#FF8200', fontSize: 13, fontWeight: '600', marginTop: 12 },
});
