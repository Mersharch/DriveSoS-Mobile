import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '../../utils/constants';
import { RequestContext, RequestContextProps } from '../../context/RequestContext';
import Logger from '../../utils/Logger';

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
      className="w-full z-20 h-50 bg-primary-white flex-row items-center px-3 rounded-lg py-1"
      style={{borderWidth:2, borderColor:'#eee'}}>
      <Icon name={iconName} size={25} color="black" />
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        fetchDetails={true}
        listViewDisplayed={false}
        onFail={(err) => Logger.error(err)}
        onPress={(data, details) => {
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
        // console.log('data ===> ', details);
      }}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
        }}
        // keepResultsAfterBlur={true}
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
            color: '#5d5d5d',
          },
          row: {
            backgroundColor: '#F5FFFF',
            padding: 13,
            flexDirection: 'row',
            fontSize: 18,
          },
          description: {
            fontSize: 18,
            color: '#5d5d5d',
          },
        }}
    />
      
    </View>
  );
};

export default GoogleInput;
