import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import SafeAreaProv from '../components/SafeAreaProv';
import HomeView from '../views/HomeView';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaProv>
        <StatusBar barStyle={'default'} />
        <AuthStack />
        {/* <HomeView/> */}

      </SafeAreaProv>
    </NavigationContainer>
  );
};

export default MainNavigator;
