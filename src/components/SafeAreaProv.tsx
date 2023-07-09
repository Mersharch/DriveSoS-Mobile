import {Platform, SafeAreaView} from 'react-native';
import React from 'react';

interface Props {
children:React.ReactNode
}

const SafeAreaProv:React.FC<Props> = ({children}) => {
  return (
      <SafeAreaView className='flex-1 bg-primary-white' style={Platform.OS === 'ios' ? {paddingTop:5} : {paddingTop:10}}>
          {children}
    </SafeAreaView>
  );
};

export default SafeAreaProv;
