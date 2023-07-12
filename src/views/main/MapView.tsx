import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useContext, useRef} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  RequestContext,
  RequestContextProps,
} from '../../context/RequestContext';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '../../utils/constants';
import Logger from '../../utils/Logger';

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

const MapVieww: React.FC<Props> = ({route}) => {
  const {request} = useContext<RequestContextProps>(RequestContext);
  const origin = {
    latitude: request?.clientLoc?.geometry?.location?.lat,
    longitude: request?.clientLoc?.geometry?.location?.lng,
  };
  const destination = { latitude: 5.5583, longitude: -0.2649 };
  
  const mapRef = useRef<any>();
  return (
    <View className="bg-primary-white flex-1">
      <View className="flex-1">
        <MapView
        ref={mapRef}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={StyleSheet.absoluteFillObject}
          showsUserLocation={true}
          initialRegion={{
            latitude: 5.5582,
            longitude: -0.2649,
            latitudeDelta: 0.012,
            longitudeDelta: 0.012,
          }}>
          <Marker
            coordinate={origin}
            title="Meeting Point"
            
            //   draggable
            //   onDragEnd={e => console.log(e.nativeEvent.coordinate)}
          />

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
        </MapView>
      </View>
      <View>
        <Text className="text-5xl">MapView</Text>
      </View>
    </View>
  );
};

export default MapVieww;
