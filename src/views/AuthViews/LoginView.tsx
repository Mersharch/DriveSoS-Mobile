import {View, Text, Image, Pressable, Alert, ScrollView} from 'react-native';
import React, {FC, useEffect, useState, useContext} from 'react';
import FullScreenLoader from '../../components/ui/FullScreenLoader';
import Input from '../../components/ui/Input';
import Buttonn from '../../components/ui/Buttonn';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthParamlist } from '../../Navigation/NavTypes';
import { AuthContext, AuthContextProps } from '../../context/AuthContext';

interface LoginProps {
  route:any
}

const LoginView: FC<LoginProps> = ({route}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const {login} = useContext<AuthContextProps>(AuthContext);
  const { navigate } = useNavigation<NavigationProp<AuthParamlist>>();
  const msg = route.params?.msg;
  

  const validate = async () => {
    setLoading(true);
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
    if (message !== 'success') {
      setLoading(false);
        return Alert.alert(message);
    }
    const res = await login({
      email,
      password,
    });
    if (!res.success) {
      setLoading(false);
      return Alert.alert(res.error);
    }
    setLoading(false);
    setEmail('');
    setPassword('');
  navigate('Tabs');
    
};
      

  useEffect(() => {
    if (msg) {
      Alert.alert(msg);
    }
  }, [msg]);
  
  return (
    <>
      {loading && <FullScreenLoader />}
      <ScrollView keyboardDismissMode='on-drag' keyboardShouldPersistTaps='never' className="flex-1 bg-primary-white flex-col" contentContainerStyle={{alignItems:'center'}}>
        {/* <Text className='text-2xl font-sans'>LoginView</Text> */}
        <Image
          source={require('../../../assets/images/Auth-Image.png')}
          className="w-56 h-56"
          resizeMode="contain"
        />
        <View className="w-full items-center flex-col gap-5">
          <View className="w-full flex-col gap-2">
            <Text className="text-black font-sans font-bold text-3xl">
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
            </View>
          </View>
          <Pressable
            className="self-end"
            onPress={() => navigate('Forgot')}>
            <Text className="text-black font-sans text-base">
              Forgot Password?
            </Text>
          </Pressable>
          <View className="w-full px-2">
            <Buttonn title="Get Started" onPress={() => validate()} />
          </View>
          <View className="w-full flex-row items-center justify-center gap-2">
            <Text className="text-black font-sans text-base">
              Dont have an account?
            </Text>
            <Pressable onPress={() => navigate('SignUp')}>
              <Text className="font-bold underline font-sans text-base text-black">
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default LoginView;
