import {View, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TransHistory = () => {
  return (
    <View className="flex-1 space-y-8">
      <Text className="w-full text-center text-2xl font-semibold font-sans">
        Payment History
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 flex flex-col space-y-4 pb-3">
        <Pressable style={{borderLeftWidth:5, borderLeftColor:"#074EEB"}} className="w-full border border-textGray py-2 px-2 flex flex-row items-center justify-between rounded-lg">
          <View className="space-y-2">
            <Text className="font-sans text-xl font-semibold">
              Auto Repairs
            </Text>
            <Text className="font-sans text-base font-semibold">
              Provider: Stunccust AutoShop
            </Text>
          </View>
          <View className="space-y-2">
            <Text className="font-sans text-xl font-semibold">GHS 150</Text>
            <Text className="font-sans text-base font-semibold">20/6/2022</Text>
          </View>
        </Pressable>
        <Pressable style={{borderLeftWidth:5, borderLeftColor:"#074EEB"}} className="w-full border border-textGray py-2 px-2 flex flex-row items-center justify-between rounded-lg">
          <View className="space-y-2">
            <Text className="font-sans text-xl font-semibold">
              Fuel Delivery
            </Text>
            <Text className="font-sans text-base font-semibold">
              Provider: Shell Filling Station
            </Text>
          </View>
          <View className="space-y-2">
            <Text className="font-sans text-xl font-semibold">GHS 150</Text>
            <Text className="font-sans text-base font-semibold">20/6/2022</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default TransHistory;
