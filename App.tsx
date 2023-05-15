/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{display: 'flex', flex: 1}}>
      <StatusBar barStyle={'default'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>aaa</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
