import {View, Text, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from './ui/Input';
import {Alert} from 'react-native';

const HomeHeader = () => {
  return (
    <View className="flex-col w-full gap-5">
      <View className="flex-row w-full justify-between">
        <View className="flex-row gap-2 w-1/2 items-center">
          <Icon name="ios-location-outline" size={30} color={'#000000'} />
          <Text className="font-bold font-sans text-textGray text-xl">
            17 5th Cl, Accra
          </Text>
        </View>
        <View className="flex gap-2 w-max items-center justify-center">
          <Icon
            name="ios-notifications-outline"
            size={30}
            color={'#000000'}
            className="self-center"
          />
        </View>
      </View>
      <View className="flex-row gap-1 items-center">
        <Image
          source={require('../../assets/images/Auth-Image.png')}
          className="w-10 h-10 rounded-full"
        />
        <View className="flex-row items-center gap-1">
          <Text className="font-sans font-bold text-2xl">Welcome,</Text>
          <Text className="font-sans font-bold text-2xl text-textGray">
            Marsai
          </Text>
        </View>
      </View>
      <View className="w-full flex-row items-center">
        <Input
          iconName="ios-search-outline"
          placeholder="Find your needed service"
          onChangeText={val => Alert.alert(val.trim())}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
