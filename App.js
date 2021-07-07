import * as Font from 'expo-font'

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import BreadNavigator from './navigation/BreadNavigator';
import { StatusBar } from 'expo-status-bar';

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)
  if (!fontLoaded) {
  <AppLoading
  startAsync={fetchFonts}
  onFinish={() => setFontLoaded(true)}
  onError={console.warn} 
  />
  }
  
  return (
   <BreadNavigator />
  );
}
