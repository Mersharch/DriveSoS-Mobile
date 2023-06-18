import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Hero from '../components/Hero';
import ServiceCard from '../components/Cards/serviceCard';
import { services } from '../utils/data';

const HomeView = () => {
  return (
    <View className='flex-1'>
      <HomeHeader />
      <ScrollView className="flex-1 my-10 space-y-10" contentContainerStyle={{alignItems:'center'}}>
          <Hero />
            <View className='w-full'>
            <Text className="font-sans font-bold text-2xl pl-2">Our Services</Text>
              <ScrollView className='flex-1' horizontal showsHorizontalScrollIndicator={false} >
                {services.map(item => <ServiceCard key={item.id} item={item}/>)}
              </ScrollView>
            </View>

            <View className='w-full'>
            <Text className="font-sans font-bold text-2xl pl-2">Top Providers</Text>
              <ScrollView className='flex-1' horizontal showsHorizontalScrollIndicator={false} >
                {services.map(item => <ServiceCard key={item.id} item={item}/>)}
              </ScrollView>
            </View>
            
      </ScrollView>
    </View>
  );
};

export default HomeView;
