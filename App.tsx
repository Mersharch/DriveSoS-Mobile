import SplashScreen from 'react-native-splash-screen';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import SafeAreaProv from './src/components/SafeAreaProv';
import MainNavigator from './src/Navigation/MainNavigator';

// import FullScreenLoader from './src/components/ui/FullScreenLoader';

// AuthViews
import LoginView from './src/views/AuthViews/LoginView';
import SignUpView from './src/views/AuthViews/SignUpView';
import ForgotPassword from './src/views/AuthViews/ForgotPassword';
import {AuthProvider} from './src/context/AuthContext';
import {RequestProvider} from './src/context/RequestContext';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <>
      <AuthProvider>
        <RequestProvider>
          <MainNavigator />
        </RequestProvider>
      </AuthProvider>
    </>
  );
}

export default App;
