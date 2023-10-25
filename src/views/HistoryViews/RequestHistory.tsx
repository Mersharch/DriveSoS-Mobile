import { View, Text, ScrollView, Pressable } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RequestHistory = () => {
  return (
      <View className='flex-1 space-y-8 bg-primary-white'>
          <Text className='w-full text-center text-2xl font-semibold font-sans'>Request History</Text>
          <ScrollView
              showsVerticalScrollIndicator={false}
              className='flex-1 flex flex-col space-y-4 pb-3 px-2'
          >
              <Pressable className='w-full border border-l-8 border-l-primary-blue py-2 px-2 flex flex-row items-center justify-between rounded-lg'>
                  <Text className='font-sans text-xl font-semibold'>Auto Repairs</Text>
                  <View className='flex flex-row space-x-5 items-center'>
                      <Text>20/6/2022</Text>
                      <Ionicons name='ios-chevron-forward' size={25} />
                  </View>
              </Pressable>
                     
              
              
          </ScrollView>
    </View>
  );
};

export default RequestHistory;
