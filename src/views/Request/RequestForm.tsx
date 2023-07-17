/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Buttonn from '../../components/ui/Buttonn';
import { RequestContextProps, RequestContext } from '../../context/RequestContext';
import Logger from '../../utils/Logger';
import ReqForm1 from '../../components/ReqForms/ReqForm1';
import ReqForm2 from '../../components/ReqForms/ReqForm2';
import ReqForm3 from '../../components/ReqForms/ReqForm3';
import GoogleInput from '../../components/ui/GoogleInput';
import Input from '../../components/ui/Input';
import { SelectList } from 'react-native-dropdown-select-list';
import { fuelType } from '../../utils/data';


interface ServiceProps {
  route: any;
}

const RequestForm = ({route}: ServiceProps) => {
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState<number>(1);
  const {request, setRequest, validateRequest} =
    React.useContext<RequestContextProps>(RequestContext);
  const [curLoc, setCurLoc] = React.useState({
    description: '',
    geometry: {location: {lat: 0, lng: 0}},
  });
  const [vec, setVehicle] = React.useState({
    year: 0,
    make: '',
    color:'',
  });
  const {goBack, navigate} = useNavigation<NavigationProp<any>>();
  const {currAddress, name} = route?.params;



  const handleSubmit = async () => {
    setLoading(true);
    setRequest((prev) => {
      return {
        ...prev,
        vehicle:`${vec.color} ${vec.year} ${vec.make}`,
      };
    });
    setTimeout(async() => {
      
      const valid = await validateRequest(request);
      if (!valid) {
        setLoading(false);
        return Alert.alert('Kindly fill all fields with the appropriate info');
      }
      setLoading(false);
      Logger.info(request);
      navigate('Map', {request});
    }, 1500);
  };

  React.useEffect(() => {
    setCurLoc({
      description: 'Current Location',
      geometry: {
        location: {lat: currAddress?.latitude, lng: currAddress?.longitude},
      },
    });
    setRequest((prev) => {
      return {
        ...prev,
        serviceType:name,
      };
    });
  }, []);

  return (
    <View className="w-full flex-1 bg-primary-white px-1">
      <View className='w-full flex-row h-max items-center mb-7'>
        <Pressable className='self-start' onPress={() => goBack()}>
        <Icon name='ios-chevron-back' size={30} color='black'  />
        </Pressable>
        <Text className='font-sans text-2xl text-center w-full text-black font-semibold'>Request Form</Text>
      </View>
      <View className='w-full'>
        <GoogleInput
          placeholder='Enter your location'
          iconName='ios-location-outline'
          curLoc={curLoc}
          />
      </View>
      <ScrollView className='flex-1 space-y-5 mt-5' keyboardDismissMode='on-drag' keyboardShouldPersistTaps='handled'>
        <View className='space-y-5'>
          <Text className='font-sans font-medium text-textGray text-xl'>
            Vehicle Details
          </Text>
          <View className=' flex flex-col space-y-5'>
            <View>

            <Input
              placeholder='Year'
              keyBoardType='number-pad'
                iconName='ios-calendar-outline'
                onChangeText={(v) => {
                  setVehicle((prev:any) => {
                    return {
                      ...prev,
                      year:Number(v),
                    };
                  });
                }}
              />
            </View>
            <View>

            <Input
              placeholder='Make/Model Eg. Ford F150 Lighting'
                iconName='car-sport-outline'
                onChangeText={(v) => {
                  setVehicle((prev:any) => {
                    return {
                      ...prev,
                      make:v,
                    };
                  });
                }}
              />
            </View>
            <View>

            <Input
              placeholder='Color'
                iconName='color-palette-outline'
                onChangeText={(v) => {
                  setVehicle((prev:any) => {
                    return {
                      ...prev,
                      color:v,
                    };
                  });
                }}
              />
              </View>
          </View>
        </View>


        <View className='space-y-5'>
          <View className='flex-row space-x-2 items-center'>
          <Text className='font-sans font-medium text-textGray text-xl'>
            Fuel Details
          </Text>
          <Text className='font-sans font-medium text-textGray text-base'>
            (Fill if service required is  fuel delivery)
          </Text>

          </View>
          <View className=' flex flex-col space-y-5'>
            <View>

            {/* <Input
              placeholder='Type'
              keyBoardType='number-pad'
              iconName='ios-calendar-outline'
              /> */}
              <SelectList 
                search={false}
                placeholder='Select fuel type'
                setSelected={(val:string) => setRequest((prev) => {
                  return {
                    ...prev,
                    fuelType: val,
                  };
                })} 
                boxStyles={{borderWidth:1.5, borderColor:'#eee'}}
                dropdownStyles={{ borderWidth: 1.5, borderColor: '#eee' }}
                dropdownTextStyles={{color:'#8E8E93', fontSize:18}}
                inputStyles={{color:'#8E8E93', fontSize:18}}
        data={fuelType} 
        save="value"
    />
            </View>
            <View>

            <Input
              placeholder='Price'
              keyBoardType='number-pad'
              iconName='car-sport-outline'
              />
            </View>
          </View>
        </View>

        <View className='space-y-2'>
          <View className='flex-row items-center space-x-2'>
            <Icon
              name='ios-pencil-outline'
              size={25}
              color={'black'}
            />
          <Text className='font-sans text-lg text-[#8E8E93]'>
            Instructions
          </Text>
          </View>
          <TextInput
            // placeholder='Instructions'
            multiline
            numberOfLines={5}
            className='border border-inputGray'
            onChangeText={(v) => {
              setRequest((prev:any) => {
                return {
                  ...prev,
                  instructions:v,
                };
              });
            }}
          />
        </View>
      </ScrollView>

      {/* {page === 1 && <ReqForm1/>} */}
      {/* {page === 2 && <ReqForm2/>}
      {page === 3 && <ReqForm3/>} */}
      
      <View className='mb-2'>
        <Buttonn
          title={loading ? 'loading' : 'Find Help'}
          onPress={() => {
            handleSubmit();
          }}
        />
      </View>
        
      </View>
  );
};

export default RequestForm;
