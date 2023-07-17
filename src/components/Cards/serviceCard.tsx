import { Pressable, Text, Image } from 'react-native';
import React from 'react';
import { AppParamlist } from '../../Navigation/NavTypes';
import { useNavigation, NavigationProp } from '@react-navigation/native';

interface ServiceProps {
  currAddress: {
    latitude?: number | null;
    longitude?: number | null;
    address?: string;
      

  };
    item: {
        id: number;
        name: string;
        image: string;
        onpress:any
    }
}

const ServiceCard = ({ item, currAddress }: ServiceProps) => {
  const { navigate } = useNavigation<any>();

  return (
    <Pressable onPress={() => navigate(item.onpress, {currAddress, name: item.name})} className='flex-col items-center mt-5 w-44  h-max rounded-lg py-4 px-2 border-2 border-inputGray space-y-4 mr-8'>
      <Image source={{ uri: item.image }} className='w-[100%] h-28 rounded-2xl' />
            <Text className='font-sans font-bold text-lg text-black text-center'>{item.name}</Text>
    </Pressable>
  );
};

export default ServiceCard;
