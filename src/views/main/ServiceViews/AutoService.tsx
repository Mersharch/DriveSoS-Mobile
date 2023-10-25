/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../../components/ui/Input';
import Buttonn from '../../../components/ui/Buttonn';
import { SelectList } from 'react-native-dropdown-select-list';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppParamlist } from '../../../Navigation/NavTypes';
import GoogleInput from '../../../components/ui/GoogleInput';
import Geolocation from 'react-native-geolocation-service';
import Logger from '../../../utils/Logger';
import FullScreenLoader from '../../../components/ui/FullScreenLoader';


interface ServiceProps {
  route:any
}

interface Location {
  lat: number;
  lng: number;
}

interface Geometry {
  location: Location;
}

interface Request {
  clientLoc: {
    description: string;
    geometry: Geometry;
  };
  amount: number;
  serviceType: string;
  vehicle: string;
  instructions: string;
}

const AutoService = ({route}: ServiceProps) => {
  const [loading, setLoading] = React.useState(false);
  const [request, setRequest] = React.useState<Request>({
    clientLoc: {
      description: '',
      geometry: { location: { lat: 0, lng: 0 } },
    },
    amount: 0,
    serviceType: '',
    vehicle: '',
    instructions:'',
    
  });
  const [curLoc, setCurLoc] = React.useState({
    description: '',
    geometry: { location: { lat: 0, lng:0} },
  });
  const { goBack, navigate } = useNavigation<NavigationProp<any>>();
  const {currAddress} = route?.params;


  const countries = [
    {
      key: 'cairo',
      value: 'Egypt',
    },
    {
      key: 'toronto',
      value: 'Canada',
    },
    {
      key: 'gold-coast',
      value: 'Australia',
    },
  ];

  async function validateRequest(data: Request): Promise<boolean> {
    if (
      typeof data.clientLoc.description !== 'string' ||
      data.clientLoc.description.trim() === '' ||
      !isValidLocation(data.clientLoc.geometry.location) ||
      typeof data.amount !== 'number' ||
      data.amount <= 0 ||
      typeof data.serviceType !== 'string' ||
      data.serviceType.trim() === '' ||
      typeof data.vehicle !== 'string' ||
      data.vehicle.trim() === '' ||
      typeof data.instructions !== 'string' ||
      data.instructions.trim() === ''
    ) {
      return false;
    }
  
    return true;
  }
  
  function isValidLocation(location: Location): boolean {
    if (
      typeof location.lat !== 'number' ||
      typeof location.lng !== 'number'
    ) {
      return false;
    }
  
    return true;
  }

  const handleSubmit = async () => {
    setLoading(true);
    const valid = await validateRequest(request);
    if (!valid) {
      setLoading(false);
      return Alert.alert('Kindly fill all fields with the appropriate info');
    }
    setLoading(false);
    Logger.info(request);
    navigate('Map', {request});
  };

 

  React.useEffect(() => {
    setCurLoc({
      description: 'Current Location',
      geometry: { location: { lat: currAddress?.latitude, lng: currAddress?.longitude } },
    });
    
  }, []);

  return (
    <>
      {loading && <FullScreenLoader />}
    <View className="flex-1 bg-primary-white space-y-6 px-1">
      <View className="w-full flex-row items-center space-x-20">
        <Pressable onPress={() => goBack()}>
          <Icon name="ios-chevron-back" size={30} />
        </Pressable>
        <Text className="font-sans font-bold text-center text-2xl">
          Service Request
        </Text>
      </View>

      <View className="flex-col items-center">
        <Image
          source={require('../../../../assets/images/mec.jpg')}
          className="w-full h-48 rounded-2xl"
        />
        <Text className="py-2 px-10 bg-primary-blue text-primary-white font-sans font-semibold text-lg rounded-lg bottom-5">
          Auto Repairs
        </Text>
      </View>

      <ScrollView
        className="space-y-6"
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="never"
        showsVerticalScrollIndicator={false}>
        <GoogleInput placeholder="Choose a meeting location" iconName="ios-location-outline" curLoc={curLoc} setRequest={setRequest} />
        <View className="flex-row w-full  items-center justify-between">
          <View className="w-3/5">
            <SelectList
              setSelected={
                (val:string) => {
                  setRequest({ ...request, serviceType: val });
                }
              }
              data={countries}
              save="key"
              placeholder='Select A Service'
              boxStyles={{ borderColor: '#eee', borderWidth: 3 }}
              inputStyles={{fontSize:20}}
              dropdownStyles={{ borderColor: '#eee', borderWidth: 3 }}
              dropdownTextStyles={{ fontSize: 15 }}
              arrowicon={<Icon name='ios-chevron-down' size={28} />}
              
            />
          </View>
          <View className="w-1/3">
            <Input
              placeholder="10"
              iconName="logo-usd"
              keyBoardType="numeric"
              amount={true}
              onChangeText={
                (v) => {
                  setRequest({ ...request, amount: Number(v) });
                }
              }
            />
          </View>
        </View>
        <View>
          <Input
            placeholder="Eg. 2022 Toyota Avalon Hybrid"
            iconName="car-sport-outline"
            onChangeText={
              (text) => {
                setRequest({ ...request, vehicle: text });
              }
            }
          />
        </View>
        <TextInput
          multiline={true}
          numberOfLines={5}
          className="w-full h-40 placeholder:text-xl text-xl p-2 outline-none appearance-none"
          placeholder="Any additional instructions?..."
          style={{
            borderWidth: 3,
            borderColor: '#eee',
            textAlignVertical: 'top',
            borderRadius: 16,
          }}
          placeholderTextColor={'#8E8E93'}
          onChangeText={
            (text) => {
              setRequest({ ...request, instructions: text });
            }
          }
          />
      </ScrollView>
      <View>
        <Buttonn title="Find Help" onPress={handleSubmit} />
      </View>
    </View>
          </>
  );
};

export default AutoService;
