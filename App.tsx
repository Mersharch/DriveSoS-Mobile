import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';
import {SafeAreaView,StatusBar} from 'react-native';
import LoginView from './src/views/AuthViews/LoginView';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <SafeAreaView className='flex flex-1'>
      <StatusBar barStyle={'default'} />
      <LoginView />
    </SafeAreaView>
  );
}

export default App;
