import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CampusPulseNavigator from './CampusPulseNavigator';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import ServicesHubScreen from '../screens/ServicesHubScreen';
import ChatbotScreen from '../screens/ChatbotScreen';

const Tab = createBottomTabNavigator();
const tabOptions = { headerStyle: { backgroundColor: '#002B49' }, headerTintColor: '#FFFFFF', headerTitleStyle: { fontWeight: '700' }, tabBarActiveTintColor: '#FF8200', tabBarInactiveTintColor: '#6C757D', tabBarStyle: { height: 62, paddingBottom: 8, paddingTop: 6 } };

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name="CampusPulse" component={CampusPulseNavigator} options={{ title: 'Pulse', headerTitle: 'Campus & Sedibeng Updates' }} />
      <Tab.Screen name="Chatbot" component={ChatbotScreen} options={{ title: 'Ask VUT', headerTitle: 'Academic Assistant' }} />
      <Tab.Screen name="Map" component={PlaceholderScreen} initialParams={{ title: 'Campus Map', description: 'Campus directions and points of interest will appear here.' }} options={{ title: 'Map', headerTitle: 'Campus Map & Directions' }} />
      <Tab.Screen name="Services" component={ServicesHubScreen} options={{ title: 'Services', headerTitle: 'MyMaVuti Services' }} />
      <Tab.Screen name="Messages" component={PlaceholderScreen} initialParams={{ title: 'Messages', description: 'Your direct student messages and notifications will appear here.' }} options={{ title: 'Messages', headerTitle: 'Messages' }} />
    </Tab.Navigator>
  );
}
