import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import SafeAreaProv from '../components/SafeAreaProv';
import HomeView from '../views/main/HomeView';
import AppStack from './AppStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './Tabs';
import MapVieww from '../views/Request/MapView';
import RequestForm from '../views/Request/RequestForm';

const MainNavigator = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaProv>
        <StatusBar barStyle={'default'} />
        <MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Auth">
          <MainStack.Screen name="Auth" component={AuthStack} />
          <MainStack.Screen name="Tabs" component={Tabs} />
          <MainStack.Screen name="Map" component={MapVieww} />
          <MainStack.Screen name="Request" component={RequestForm} />
        </MainStack.Navigator>
      </SafeAreaProv>
    </NavigationContainer>
  );
};

export default MainNavigator;
