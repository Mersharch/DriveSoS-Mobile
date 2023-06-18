import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Hero from '../components/Hero';

const HomeView = () => {
  return (
    <View className='flex-1'>
      <HomeHeader />
      <ScrollView className="flex-1">
        <View className='w-full flex-row items-center justify-center'>
          <Hero />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeView;
