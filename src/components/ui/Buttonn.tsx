import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

interface Prop {
    title: string
    onPress?: () => void
}

const Buttonn:React.FC<Prop> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress || undefined} className='w-full bg-primary-blue h-14 flex-row justify-center items-center rounded-xl'>
          <Text className='text-primary-white font-sans font-semibold text-xl'>{ title}</Text>
    </TouchableOpacity>
  );
};

export default Buttonn;
