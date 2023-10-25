import {View, Text, Image} from 'react-native';
import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from './ui/Input';
import {Alert} from 'react-native';


interface Props {
  address:string
}
const HomeHeader: FC<Props> = ({address}) => {
  return (
    <View className="flex-col h-max space-y-5 pb-2">
      <View className="flex-row w-full justify-between">
        <View className="flex-row gap-2 w-[90%] items-center">
          <Icon name="ios-location-outline" size={25} color={'#000000'} />
          <Text className="font-bold font-sans text-textGray text-xl">
            {address || 'Pinpointing your current location...'}
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
      <View className="flex-row space-x-1 items-center">
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
      <View className="w-full flex-row items-center px-1">
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
