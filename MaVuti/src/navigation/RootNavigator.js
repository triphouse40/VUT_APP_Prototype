import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import ServiceDetailScreen from '../screens/ServiceDetailScreen';

const Stack = createNativeStackNavigator();
const options = { headerStyle: { backgroundColor: '#002B49' }, headerTintColor: '#FFFFFF', headerTitleStyle: { fontWeight: '600' } };

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Clinic" component={ServiceDetailScreen} initialParams={{ title: 'Health Clinic', description: 'Consultations, appointments and emergency contacts.' }} options={{ title: 'Campus Clinic Services' }} />
      <Stack.Screen name="Projects" component={ServiceDetailScreen} initialParams={{ title: 'Student Showcase', description: 'Explore student engineering, design and technology projects.' }} options={{ title: 'Student Showcase' }} />
      <Stack.Screen name="Creators" component={ServiceDetailScreen} initialParams={{ title: 'VUT Creators', description: 'Discover campus podcasters, photographers and creators.' }} options={{ title: 'VUT Content Creators' }} />
    </Stack.Navigator>
  );
}
