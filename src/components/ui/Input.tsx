import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconx from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  placeholder: string;
  iconName: string;
  keyBoardType?: string;
  onChangeText?: (text: string) => void;
  password?: boolean;
  amount?: boolean;
  fuel?: boolean;
}

const Input: React.FC<Props> = ({
  placeholder,
  iconName,
  keyBoardType,
  onChangeText,
  password,
  amount,
  fuel,
}) => {
  const [hideText, setHideText] = useState<boolean>(true);

  return (
    <View
      className="w-full h-12 bg-primary-white flex-row items-center px-3 rounded-lg"
      style={{ borderWidth: 1.5, borderColor: '#eee' }}>
      {fuel ? <Iconx name={iconName} size={25} color="black" /> : amount ? <Text className='text-black text-lg'>GH¢</Text> : <Icon name={iconName} size={25} color="black" /> }
      <TextInput
        placeholder={placeholder}
        className={`text-lg  font-sans ${ amount || fuel ? "w-14 text-xl text-right mr-1" : password ? "w-[75%] ml-3" : 'ml-3 w-[92%]'}`}
        placeholderTextColor={'#8E8E93'}
        keyboardType={keyBoardType}
        secureTextEntry={password ? hideText : false}
        onChangeText={onChangeText}
        maxLength={25}
      />
      {password && (
        <TouchableOpacity
          onPress={() => setHideText(!hideText)}
          className="text-lg text-textGray absolute right-4">
          <Text>{hideText ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      )}
      {amount && <Text className='text-[#8E8E93] font-sans font-semibold text-lg'>/hr</Text>}
      {fuel && <Text className='text-[#8E8E93] font-sans font-semibold text-lg'>/L</Text>}
    </View>
  );
};

export default Input;
