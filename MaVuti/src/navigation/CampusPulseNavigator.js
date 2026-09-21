import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PlaceholderScreen from '../screens/PlaceholderScreen';

const Tab = createMaterialTopTabNavigator();

export default function CampusPulseNavigator() {
  return (
    <Tab.Navigator screenOptions={{ tabBarIndicatorStyle: { backgroundColor: '#FF8200', height: 3 }, tabBarActiveTintColor: '#002B49', tabBarInactiveTintColor: '#6C757D', tabBarLabelStyle: { fontWeight: '700', textTransform: 'none', fontSize: 14 } }}>
      <Tab.Screen name="News" component={PlaceholderScreen} initialParams={{ title: 'Campus Pulse', description: 'Campus news and local student updates will appear here.' }} />
      <Tab.Screen name="Events" component={PlaceholderScreen} initialParams={{ title: 'Upcoming Events', description: 'Campus activities, deadlines and events will appear here.' }} />
    </Tab.Navigator>
  );
}
