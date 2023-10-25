import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';
import Logger from './Logger';
import Geocoder from 'react-native-geocoding';
import { GOOGLE_MAPS_APIKEY } from './constants';


const requestLocationPermission: () => Promise<boolean | any> = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'Kindly Allow DriveSoS To Access Your Location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              return true;
          // getCurrentLocation();
        } else {
            Logger.error('Camera permission denied');
            return false;
        }
      } catch (err) {
          Logger.warn(err);
          return false;
      }
    }
};


const getCurrentLocation  = async (cb:any,errCB:any) => {
   Geolocation.getCurrentPosition(
     async (position) => {
       return await cb({
         latitude: position?.coords.latitude,
         longitude: position?.coords.longitude,
       });
    },
    (error:any) => {
      // See error code charts below.
      return errCB(error);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );  
};


const getCurrentAddress: (lat: number, lng: number) => Promise<any> = async (lat, lng) => {
  Geocoder.init(GOOGLE_MAPS_APIKEY);
  return Geocoder.from(lat, lng)
    .then(json => {
      // Logger.info(json?.results[2]?.formatted_address);
		var formattedAddress = json?.results[4]?.formatted_address;
      return formattedAddress;
		})
		.catch(error => Logger.warn(` geo error   ${error}`));
};
export default {
  requestLocationPermission,
  getCurrentLocation,
  getCurrentAddress,
};
