import {View, Text, Image} from 'react-native';
import React, { FC, useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from './ui/Input';
import {Alert} from 'react-native';
import { AuthContext, AuthContextProps } from '../context/AuthContext';


interface Props {
  address:string
}
const HomeHeader: FC<Props> = ({ address }) => {
  const { user } = useContext<AuthContextProps>(AuthContext);
  return (
    <View className=" w-full flex-col h-max space-y-5 pb-2">
      <View className="flex-row w-full justify-between">
        <View className="flex-row gap-2 w-[80%] items-center">
          <Icon name="ios-location-outline" size={25} color={'#000000'} />
          <Text className="font-sans font-normal text-black text-lg" numberOfLines={1} ellipsizeMode='tail'>
            {address || 'Current location...'}
          </Text>
        </View>
        <View className="flex w-max items-center justify-center">
          <Icon
            name="ios-notifications-outline"
            size={25}
            color={'#000000'}
            className="self-center"
          />
        </View>
      </View>
      <View className="w-full flex-row space-x-1 items-center px-1">
        {/* <Image
          source={require('../../assets/images/Auth-Image.png')}
          className="w-10 h-10 rounded-full"
        /> */}
        <View className="flex-row items-center gap-1">
          <Text className="font-sans font-bold text-xl">Welcome,</Text>
          <Text className="font-sans font-bold text-xl text-black">
            {user?.name?.split(' ')[0]}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
