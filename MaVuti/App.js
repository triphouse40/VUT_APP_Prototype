import React from 'react';
import {  Image, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen(){
  return(
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor='#ffffff'></StatusBar>
      <SafeAreaView style={styles.container}>
        <Image
          source={require('./assets/images/Original logo.png')}
          style={styles.image}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function MapScreen(){
  return(
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor='#ffffff'></StatusBar>
      <SafeAreaView style={styles.containerMap}>
        <Image
          source={require('./assets/images/White logo.png')}
          style={styles.imageMap}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function AboutScreen(){
    return(
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor='#fff'></StatusBar>
      <SafeAreaView style={styles.containerScreen}>
        <Image
          source={require('./assets/images/Dark logo.png')}
          style={styles.imageScreen}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          screenOptions={{headerShown: false,
          tabBarActiveTintColor: '#007AFF',
          tabBarStyle: {backgroundColor: '#f8f8f8'}
          }}>
        <Tab.Screen name="Explore" component={HomeScreen}/>
        <Tab.Screen name="Map" component={MapScreen}/>
        <Tab.Screen name="About" component={AboutScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3D47',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMap: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerScreen: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
  },
  imageMap: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
  },  
  imageScreen: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
  },
});
