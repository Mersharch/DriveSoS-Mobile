import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

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

const MapVieww: React.FC<Props> = ({ route })=> {
  const { request } = route?.params;
  return (
    <View className="bg-primary-white flex-1">
        <View className='flex-1'>

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={StyleSheet.absoluteFillObject}
        showsUserLocation={true}
        initialRegion={{
          latitude: 5.5563745,
          longitude: -0.2676898,
          latitudeDelta: 0.012,
          longitudeDelta: 0.012,
                  }}
                  
              >
        <Marker
          coordinate={{latitude: request?.clientLoc?.geometry?.location.lat, longitude:request?.clientLoc?.geometry?.location.lng}}
          title="Meeting Point"
                //   draggable
                //   onDragEnd={e => console.log(e.nativeEvent.coordinate)}
        />
        <Marker
          coordinate={{latitude: 5.5583, longitude: -0.2649}}
          title="Personnel">
          <MyCustomMarkerView />
        </Marker>
      </MapView>
          </View>
          <View>
              
      <Text className="text-5xl">MapView</Text>
          </View>
    </View>
  );
};

export default MapVieww;
