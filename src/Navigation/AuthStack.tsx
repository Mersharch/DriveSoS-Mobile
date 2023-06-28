import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthParamlist} from './NavTypes';
import LoginView from '../views/AuthViews/LoginView';
import SignUpView from '../views/AuthViews/SignUpView';
import ForgotPassword from '../views/AuthViews/ForgotPassword';

const AuthStack = () => {
  const AuStack = createNativeStackNavigator<AuthParamlist>();
  return (
    <AuStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <AuStack.Screen name="Login" component={LoginView} />
      <AuStack.Screen name="SignUp" component={SignUpView} />
      <AuStack.Screen name="Forgot" component={ForgotPassword} />
    </AuStack.Navigator>
  );
};

export default AuthStack;
