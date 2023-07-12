/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, ScrollView, FlatList, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeHeader from '../../components/HomeHeader';
import Hero from '../../components/Hero';
import {services} from '../../utils/data';
import ServiceCard from '../../components/Cards/serviceCard';
import Logger from '../../utils/Logger';
import Loc from '../../utils/locationLib';

const HomeView = () => {
  const [locpermission, setLocPermisssion] = useState(false);
  const [currAddress, setCurrAddress] = useState<any>();

  const locCallBack = async (a: any) => {
    const address = await Loc.getCurrentAddress(a?.latitude, a?.longitude);
    Logger.info(`address:    ${address}`);
     setCurrAddress({
      ...a,
      address,
     });
    return {
      ...a,
      address,
    };
  };

  const locErrCallBack = (err:any) => {
    return Logger.error(`getloc err ===> ${err?.message}`);
  };

  const setCurr = async () => {
    console.log('here');
    
    if (!locpermission) {
      console.log('here2');
      
      const granted = await Loc.requestLocationPermission();
      console.log('here3');
      
      setLocPermisssion(granted);
      console.log('here4');
      
      if (granted) {
        console.log('here5');
        
        await Loc.getCurrentLocation(locCallBack, locErrCallBack).then(
          lcation => {
            console.log('here6');
            
            return console.log("lcation", currAddress);
          }
        ).catch((err: any) => {
          return Logger.error(err?.message);
        });
      } else if (granted === false) {
        setCurr();
      }
    } 
    
  };

  useEffect(() => {
    console.log('rrr');
    setCurr();
  },[]);

  return (
    <View className=" w-full  px-1 flex-1 flex-col justify-center bg-primary-white">
      <HomeHeader address={currAddress?.address} />
      <ScrollView className="w-full flex-1 mt-5 space-y-5">
        <View className="w-full flex-row items-center justify-center px-1">
          <Hero />
        </View>
        <View className="w-full flex-col space-y-5 pb-1 px-2">
          <Text className="font-sans font-bold text-black text-xl">Our Services</Text>
          <FlatList
            data={services}
            horizontal
            renderItem={({item}) => {
              return <ServiceCard item={item} currAddress={currAddress} />;
            }}
          />
        </View>
        <View className="w-full flex-col space-y-5 pb-1 px-2">
          <Text className="font-sans font-bold text-black text-xl">
            Top Service Providers
          </Text>
          <FlatList
            data={services}
            horizontal
            renderItem={({item}) => {
              return <ServiceCard item={item} currAddress={currAddress} />;
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeView;
