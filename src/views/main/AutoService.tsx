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
import {SelectList} from 'react-native-dropdown-select-list';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import Buttonn from '../../components/ui/Buttonn';
import FullScreenLoader from '../../components/ui/FullScreenLoader';
import GoogleInput from '../../components/ui/GoogleInput';
import Input from '../../components/ui/Input';
import { RequestContextProps, RequestContext } from '../../context/RequestContext';
import Logger from '../../utils/Logger';


interface ServiceProps {
  route: any;
}

const AutoService = ({route}: ServiceProps) => {
  const [loading, setLoading] = React.useState(false);
  const {request, setRequest, validateRequest} =
    React.useContext<RequestContextProps>(RequestContext);
  const [curLoc, setCurLoc] = React.useState({
    description: '',
    geometry: {location: {lat: 0, lng: 0}},
  });
  const {goBack, navigate} = useNavigation<NavigationProp<any>>();
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
      geometry: {
        location: {lat: currAddress?.latitude, lng: currAddress?.longitude},
      },
    });
  }, []);

  return (
    <>
      {loading && <FullScreenLoader />}
      <View className="w-full flex-1 bg-primary-white space-y-6 px-1">
        <View className="w-full flex-row items-center justify-center">
          <Pressable onPress={() => goBack()} className='absolute left-0'>
            <Icon name="ios-chevron-back" size={25} color={'black'} />
          </Pressable>
          <Text className="font-sans font-bold text-center text-black text-xl">
            Service Request
          </Text>
        </View>

        <View className="w-full flex-col items-center">
          <Image
            source={require('../../../assets/images/mec.jpg')}
            className="w-full h-36 rounded-2xl"
          />
          <Text className="py-2 px-10 bg-primary-blue text-primary-white font-sans font-semibold text-lg rounded-lg bottom-5">
            Auto Repairs
          </Text>
        </View>

        <ScrollView
          className="w-full flex-1 space-y-10"
          contentContainerStyle={{justifyContent: 'space-between'}}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="never"
          showsVerticalScrollIndicator={false}>
            <GoogleInput
              placeholder="Choose a meeting location"
              iconName="ios-location-outline"
              curLoc={curLoc}
            />
            <View className="flex-row w-full  items-center justify-between">
              <View className="w-3/5">
                <SelectList
                  setSelected={(val: string) => {
                    setRequest(prev => {
                      return {...prev, serviceType: val};
                    });
                  }}
                  data={countries}
                  save="key"
                  placeholder="Select A Service"
                  boxStyles={{borderColor: '#eee', borderWidth: 1.5}}
                  inputStyles={{fontSize: 18}}
                  dropdownStyles={{borderColor: '#eee', borderWidth: 1.5}}
                  dropdownTextStyles={{fontSize: 18}}
                  arrowicon={<Icon name="ios-chevron-down" size={25} />}
                  
                />
              </View>
              <View className="w-1/3">
                <Input
                  placeholder="10"
                  iconName="logo-usd"
                  keyBoardType="numeric"
                  amount={true}
                  onChangeText={v => {
                    setRequest(prev => {
                      return {...prev, amount: Number(v)};
                    });
                  }}
                />
              </View>
            </View>
            <View>
              <Input
                placeholder="Eg. 2022 Toyota Avalon Hybrid"
                iconName="car-sport-outline"
                onChangeText={text => {
                  setRequest(prev => {
                    return {...prev, vehicle: text};
                  });
                }}
              />
            </View>
            <TextInput
              multiline={true}
              numberOfLines={5}
              className="w-full h-40 text-lg p-2 outline-none appearance-none"
              placeholder="Any additional instructions?..."
              style={{
                borderWidth: 1.5,
                borderColor: '#eee',
                textAlignVertical: 'top',
                borderRadius: 16,
              }}
              placeholderTextColor={'#8E8E93'}
              onChangeText={text => {
                setRequest(prev => {
                  return {...prev, instructions: text};
                });
              }}
            />
          <View className=''>
            <Buttonn title="Find Help" onPress={handleSubmit} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default AutoService;
