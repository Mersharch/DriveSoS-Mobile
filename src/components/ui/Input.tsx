import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  placeholder: string;
  iconName: string;
  keyBoardType?: string;
  onChangeText?: (text: string) => void;
  password?: boolean;
}

const Input: React.FC<Props> = ({
  placeholder,
  iconName,
  keyBoardType,
  onChangeText,
  password,
}) => {
  const [hideText, setHideText] = useState<boolean>(true);

  return (
    <View
      className="w-full h-16 bg-primary-white flex-row items-center px-3 rounded-2xl"
      style={{borderWidth:3, borderColor:'#eee'}}>
      <Icon name={iconName} size={25} color="black" />
      <TextInput
        placeholder={placeholder}
        className=" placeholder:text-xl text-xl ml-3 font-sans w-[75%]"
        placeholderTextColor={'#8E8E93'}
        keyboardType={keyBoardType}
        secureTextEntry={password ? hideText : false}
        onChangeText={onChangeText}
        maxLength={25}
      />
      {password && (
        <TouchableOpacity
          onPress={() => setHideText(!hideText)}
          className="text-lg text-textGray absolute right-4 bottom-5">
          <Text>{hideText ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
