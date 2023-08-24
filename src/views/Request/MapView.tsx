import {View, Text, StyleSheet, Image, Modal, ActivityIndicator, Pressable} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  RequestContext,
  RequestContextProps,
} from '../../context/RequestContext';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '../../utils/constants';
import Logger from '../../utils/Logger';
import { useNavigation } from '@react-navigation/native';

interface Props {
  route: any;
}

const MyCustomMarkerView = () => {
  return (
    <Image
      source={require('../../../assets/images/icons8-mechanic-48.png')}
      className="w-10 h-10"
    />
  );
};

const MapVieww: React.FC<Props> = ({ route }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const {request} = useContext<RequestContextProps>(RequestContext);
  const origin = {
    latitude: request?.clientLoc?.geometry?.location?.lat,
    longitude: request?.clientLoc?.geometry?.location?.lng,
  };
  const destination = { latitude: 5.5583, longitude: -0.2649 };
  // const destination = {};
  const { goBack } = useNavigation<any>();
  const mapRef = useRef<any>();
  return (
    <>
    <View className="bg-primary-white flex-1">
        <View className='w-22'>
          <Pressable onPress={() => goBack()}>

        <Icon name='ios-chevron-back' size={35} color='black' />
          </Pressable>
      </View>
      <View className="flex-1">
        <MapView
        ref={mapRef}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={StyleSheet.absoluteFillObject}
          showsUserLocation={true}
          showsMyLocationButton={true}
          initialRegion={{
            ...origin,
            latitudeDelta: 0.012,
            longitudeDelta: 0.012,
          }}
          
        >
          <Marker
            coordinate={origin}
            title="Meeting Point"

            
            //   draggable
            //   onDragEnd={e => console.log(e.nativeEvent.coordinate)}
          />
          {Object.keys(destination).length !== 0 && <>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            optimizeWaypoints={true}
            onReady={(res) => {
              mapRef.current?.fitToCoordinates(res.coordinates, {
                edgePadding: {
                  right: 30,
                  bottom: 300,
                  left: 30,
                  top: 100,
                },
              });
            } }
            onError={(err)=> Logger.error(`error ===>: ${err}`)}
            strokeWidth={3}
            strokeColor='blue'
            />

          <Marker coordinate={destination} title="Personnel">
            <MyCustomMarkerView />
          </Marker>
            </>}
        </MapView>
        </View>
        {Object.keys(destination).length !== 0 &&
      <View className='bg-primary-white w-full flex-col p-3'>
        <View className='flex flex-col space-y-3 items-center'>
          <Image source={require('../../../assets/images/vic.jpg')} className='w-14 h-14 rounded-full' />
          <Text className='font-sans font-bold text-xl text-black'>Oscar Agyemang</Text>
        </View>
        <View className='flex flex-row space-x-3 items-center self-center'>
          <Icon name='ios-call' size={15} color='black' />
          <Text className='font-sans font-semibold text-base text-black'>0594045146</Text>
            </View>
      </View>
        }
      </View>
      <Modal
            animationType='fade'
            presentationStyle='fullScreen'
        visible={show}
        // transparent
      >
        <View className='flex flex-row flex-1 items-center justify-center'>
        <View className=' w-3/4 h-48 bg-primary-gray flex flex-col justify-center items-center rounded-xl space-y-3'>
          <Text className='font-sans text-semibold text-xl text-black'>
            Looking for a Service Provider
            </Text>
            {loading && <ActivityIndicator size='large' />}
            </View>
        </View>
          </Modal>
      </>
  );
};

export default MapVieww;
