import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';


 import Routes from './src/routes';

export default function hunt() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  
  );
}
