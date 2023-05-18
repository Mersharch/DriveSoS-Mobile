import {View, ActivityIndicator} from 'react-native';
import React from 'react';

const FullScreenLoader = () => {
  return (
    <View className="flex flex-col items-center justify-center opacity-60 absolute top-0 left-0 z-20 h-screen w-screen bg-primary-white">
      <ActivityIndicator size="large" animating={true} color='#074EEB' />
    </View>
  );
};

export default FullScreenLoader;
