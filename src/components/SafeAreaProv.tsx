import {Platform, SafeAreaView} from 'react-native';
import React from 'react';

interface Props {
children:React.ReactNode
}

const SafeAreaProv:React.FC<Props> = ({children}) => {
  return (
      <SafeAreaView className='flex-1 bg-primary-white px-1' style={Platform.OS === 'ios' ? {paddingVertical:5} : {paddingVertical:10}}>
          {children}
    </SafeAreaView>
  );
};

export default SafeAreaProv;
