import {View, Text, Image, Pressable, Alert} from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Hero = () => {
    const [num, setNum] = useState<number>(0);
    const heroData = [
        {
            title: 'Need your vehicle towed?',
            img: require('../../assets/images/truck.png'),
            onclick: () => Alert.alert('1 clicked'),
        },
        {
            title: 'Need your vehicle repaired?',
            img: require('../../assets/images/car.png'),
            onclick: () => Alert.alert('2 clicked'),
        },
        {
            title: 'Need your tire changed?',
            img: require('../../assets/images/tire.png'),
            onclick: () => Alert.alert('3 clicked'),
        },
    ];

    useEffect(() => {
        setInterval(() => {
            setNum((prev) => prev === heroData.length - 1 ? 0 : prev + 1);
        },5000);
    },[heroData.length]);
  return (
    <Pressable
      className="w-full flex-row bg-primary-blue h-24 rounded-xl ease-in-out px-1 items-center justify-around"
      onPress={heroData[num].onclick}>
      <Image
        source={heroData[num].img}
        className="w-24 h-10 top-2"
      />
      <View className="flex-col gap-2 ml-5">
        <Text className="font-sans font-medium text-primary-white text-base">
          {heroData[num].title}
        </Text>
        <Text className="font-sans font-bold text-primary-white text-xl">
          Drive SoS Gotchu
        </Text>
        <View className="flex-row items-center">
          <Text className="font-sans text-primary-gray text-base">
            Request Now
          </Text>
          <Icon name="ios-arrow-forward-outline" color={'#D1D1D6'} size={18} />
        </View>
      </View>
    </Pressable>
  );
};

export default Hero;
