import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../../components/ui/Input';
import Buttonn from '../../../components/ui/Buttonn';
import SelectDropdown from 'react-native-select-dropdown';

const AutoService = () => {
  const countries = [
    {
      value: 'cairo',
      text: 'Egypt',
    },
    {
      value: 'toronto',
      text: 'Canada',
    },
    {
      value: 'gold-coast',
      text: 'Australia',
    },
  ];

  return (
    <View className="flex-1 space-y-6 px-1">
      <View className="w-full flex-row items-center space-x-20">
        <Pressable>
          <Icon name="ios-chevron-back" size={30} />
        </Pressable>
        <Text className="font-sans font-bold text-center text-2xl">
          Service Request
        </Text>
      </View>

      <View className="flex-col items-center">
        <Image
          source={require('../../../assets/images/mec.jpg')}
          className="w-full h-48 rounded-2xl"
        />
        <Text className="py-2 px-10 bg-primary-blue text-primary-white font-sans font-semibold text-lg rounded-lg bottom-5">
          Auto Repairs
        </Text>
      </View>

      <ScrollView
        className="space-y-6"
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="never"
        showsVerticalScrollIndicator={false}>
        <Input placeholder="17 5th Cl, Accra" iconName="ios-location-outline" />
        <View className="flex-row w-full  items-center justify-between">
          <View className="w-3/5">
            <SelectDropdown
              renderDropdownIcon={() => (
                <Icon name="ios-chevron-down" size={30} />
              )}
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem.value, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem.text;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item.text;
              }}
              defaultButtonText="Select a Service"
              buttonStyle={{
                backgroundColor: '#f5ffff',
                borderWidth: 3,
                borderColor: '#eee',
                borderRadius: 16,
                height: 64,
              }}
              buttonTextStyle={{color: '#8E8E93'}}
            />
          </View>
          <View className="w-1/3">
            <Input
              placeholder="10"
              iconName="logo-usd"
              keyBoardType="numeric"
              amount={true}
            />
          </View>
        </View>
        <View>
          <Input
            placeholder="Eg. 2022 Toyota Avalon Hybrid"
            iconName="car-sport-outline"
          />
        </View>
        <TextInput
          multiline={true}
          numberOfLines={5}
          className="w-full h-40 placeholder:text-xl text-xl p-2 outline-none appearance-none"
          placeholder="Any additional instructions?..."
          style={{
            borderWidth: 3,
            borderColor: '#eee',
            textAlignVertical: 'top',
            borderRadius: 16,
          }}
          placeholderTextColor={'#8E8E93'}
        />
      </ScrollView>
      <View>
        <Buttonn title="Find Help" />
      </View>
    </View>
  );
};

export default AutoService;
