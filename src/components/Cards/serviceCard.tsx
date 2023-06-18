import { Pressable, Text, Image } from 'react-native';
import React from 'react';

interface Props {
    item: {
        id: number;
        name: string;
        image: string;
        onpress:string
    }
}

const ServiceCard = ({item}:Props) => {
  return (
    <Pressable className='flex-col items-center w-56 min-h-[221px] h-56 rounded-lg py-4 px-2 border border-inputGray space-y-4 mr-7'>
      <Image source={{ uri: item.image }} className='w-[100%] h-36 rounded-2xl' />
            <Text className='font-sans font-bold text-2xl text-center'>{item.name}</Text>
    </Pressable>
  );
};

export default ServiceCard;
