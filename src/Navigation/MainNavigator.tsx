import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import SafeAreaProv from '../components/SafeAreaProv';

const MainNavigator = () => {
  return (
    <NavigationContainer>
       <SafeAreaProv>
      <StatusBar barStyle={'default'} />
          <AuthStack />
    </SafeAreaProv>
    </NavigationContainer>
  );
};

export default MainNavigator;
