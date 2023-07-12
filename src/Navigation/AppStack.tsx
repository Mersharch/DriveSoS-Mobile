import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppParamlist, AuthParamlist} from './NavTypes';
import HomeView from '../views/main/HomeView';
import AutoService from '../views/main/AutoService';
import MapVieww from '../views/main/MapView';

const AppStack = () => {
  const ApStack = createNativeStackNavigator<AppParamlist>();
  return (
    <ApStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <ApStack.Screen name="Home" component={HomeView} />
    </ApStack.Navigator>
  );
};

export default AppStack;
