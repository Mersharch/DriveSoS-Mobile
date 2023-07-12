import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '../../utils/constants';
import { RequestContext, RequestContextProps } from '../../context/RequestContext';

interface Props {
  placeholder: string;
  iconName: string;
  curLoc: {
    description: string;
    geometry: { location: { lat: number; lng: number } };
  };
}

const GoogleInput: React.FC<Props> = ({
  placeholder,
  iconName,
  curLoc,
}) => {

  const { setRequest } = React.useContext<RequestContextProps>(RequestContext);

  return (
    <View
      className="w-full z-20 flex-1 bg-primary-white flex-row items-center px-3 rounded-lg py-1"
      style={{borderWidth:1.5, borderColor:'#eee'}}>
      <Icon name={iconName} size={25} color="black" />
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        fetchDetails={true}
        onPress={(data, details = null) => {
          setRequest((prev:any) => {
            return {
              ...prev,
              clientLoc: {
                
                description: data.description,
                geometry: { location: details?.geometry?.location },
              },
            };
          });
        // 'details' is provided when fetchDetails = true
        console.log( details?.geometry.location);
        console.log('data ===> ', details);
      }}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
        }}
        predefinedPlaces={[curLoc]}
        enablePoweredByContainer={false}
        styles={{
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 18,
            backgroundColor: '#F5FFFF',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
    />
      
    </View>
  );
};

export default GoogleInput;
