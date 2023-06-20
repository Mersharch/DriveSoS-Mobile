import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import SafeAreaProv from '../components/SafeAreaProv';
import HomeView from '../views/HomeView';
import AutoService from '../views/ServiceViews/AutoService';
import TowService from '../views/ServiceViews/TowService';
import FuelService from '../views/ServiceViews/FuelService';
import RequestHistory from '../views/HistoryViews/RequestHistory';
import TransHistory from '../views/HistoryViews/TransHistory';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaProv>
        <StatusBar barStyle={'default'} />
        {/* <AuthStack /> */}
        {/* <HomeView/> */}
        <TransHistory />

      </SafeAreaProv>
    </NavigationContainer>
  );
};

export default MainNavigator;
