import {View, Text, Image, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import FullScreenLoader from '../../components/ui/FullScreenLoader';
import Input from '../../components/ui/Input';
import Buttonn from '../../components/ui/Buttonn';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthParamlist } from '../../Navigation/NavTypes';

const LoginView = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const { navigate } = useNavigation<NavigationProp<AuthParamlist>>();

  const validate = () => {
    setLoading(true);
    setTimeout(() => {
      const message =
        !email || !password
          ? 'fill all fields'
          : !email.match(
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]{3,}(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            )
          ? 'invalid email format'
          : password.length < 8
          ? 'minimum password length should be 8 characters'
          : 'success';
      setLoading(false);
      if (message !== 'success') {
        
        return Alert.alert(message);
      }
      navigate('Home');
      
    }, 1500);
  };
  return (
    <>
      {loading && <FullScreenLoader />}
      <View className="flex-1 bg-primary-white flex-col items-center">
        {/* <Text className='text-2xl font-sans'>LoginView</Text> */}
        <Image
          source={require('../../../assets/images/Auth-Image.png')}
          className="w-56 h-56"
          resizeMode="contain"
        />
        <View className="w-full items-center flex-col gap-5">
          <View className="w-full flex-col gap-2">
            <Text className="text-black font-sans font-bold text-4xl">
              Login
            </Text>
            <Text className="text-textGray font-sans text-base">
              Enter your login details to continue
            </Text>
          </View>
          <View className="w-full flex-col px-2">
            <View className="w-full">
              <Input
                placeholder="Email Address"
                iconName="ios-mail-outline"
                onChangeText={v => {
                  setEmail(v.trim());
                }}
              />
              <Text className="font-sans mt-1">!Error</Text>
            </View>
            <View className="w-full mt-5">
              <Input
                placeholder="Password"
                iconName="ios-lock-closed-outline"
                password={true}
                onChangeText={v => {
                  setPassword(v.trim());
                }}
              />
              <Text className="font-sans mt-1">!Error</Text>
            </View>
          </View>
          <Pressable
            className="self-end"
            onPress={() => navigate('Forgot')}>
            <Text className="text-textGray font-sans text-base">
              Forgot Password?
            </Text>
          </Pressable>
          <View className="w-full">
            <Buttonn title="Get Started" onPress={() => validate()} />
          </View>
          <View className="w-full flex-row items-center justify-center gap-2">
            <Text className="text-textGray font-sans text-base">
              Dont have an account?
            </Text>
            <Pressable onPress={() => navigate('SignUp')}>
              <Text className="font-bold underline font-sans text-base">
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginView;
