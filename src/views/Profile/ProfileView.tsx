import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext, AuthContextProps} from '../../context/AuthContext';
import { profOptions } from '../../utils/data';


const ProfileView = () => {
  const {user} = useContext<AuthContextProps>(AuthContext);
  return (
    <ScrollView className='flex-1 px-2 bg-primary-white flex-col'>
      <View className='flex-col items-center  py-5 px-20'>
        <Text className='fonst-sans text-black font-semibold text-2xl'>{user?.name}</Text>
        <Text className='fonst-sans text-textGray font-normal text-lg'>{user?.email}</Text>
      </View>
      <View className='flex-col flex-1 space-y-8'>
        
          {profOptions.map((data) => {
            return (
              <View className='space-y-5'>
                <Text className='font-sans text-xl'>{data.title}</Text>
                <View>
                  {data.options.map((d) => {
                    return (
                      <TouchableOpacity className='w-full flex-row justify-between items-center'>
                        <View className='flex-row space-x-2 items-center'>
                          <Ionicons name={d.icon} size={25} color='black' />
                          <Text className='font-sans text-xl'>{d.title}</Text>
                        </View>
                        <Ionicons name='ios-chevron-forward' size={25} color='black' />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            );
          })}
      </View>
          </ScrollView>
          
     
  );
};

export default ProfileView;
