import {View, Text, ScrollView, Pressable, Alert, KeyboardAvoidingView, Modal, Image, Platform} from 'react-native';
import React, {useContext, useState} from 'react';
import FullScreenLoader from '../../components/ui/FullScreenLoader';
import Input from '../../components/ui/Input';
import Buttonn from '../../components/ui/Buttonn';
import Logger from '../../utils/Logger';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthParamlist } from '../../Navigation/NavTypes';
import { AuthContext, AuthContextProps } from '../../context/AuthContext';


const SignUpView =  () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [first, setFirst] = useState<string>('');
  const [last, setLast] = useState<string>('');
  const [phone, setPhone] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [cpassword, setCPassword] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');

  const { navigate } = useNavigation<NavigationProp<AuthParamlist>>();
  const {register} = useContext<AuthContextProps>(AuthContext);



  const validate = async () => {
    setLoading(true);
      const message =
        !email || !password || !first || !last || !cpassword || !phone
          ? 'fill all fields'
          : !email.match(
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]{3,}(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            )
          ? 'invalid email format'
          : password.length < 8
          ? 'minimum password length should be 8 characters'
          : password !== cpassword
          ? 'passwords do not match'
                : 'success';
      
      if (message !== "success") {
        setLoading(false);
        return Alert.alert(message);
      }
      
      const res = await register({
        name: `${first} ${last}`,
        email,
        password,
        phone: `0${phone}`,
      });
      if (!res.success) {
        setLoading(false);
        return Alert.alert(res.error);
      }
      setLoading(false);
      // Alert.alert(res.msg);
    navigate('Login', {msg:"Account Created Successfully, Kindly Login"});
      
  };

  return (
    <>
      {loading && <FullScreenLoader />}
      <View className="flex-1 flex-col gap-3 mt-5 bg-primary-white">
        {/* top */}
        <View className="w-full flex-col gap-2">
          <Text className="text-black font-sans font-bold text-4xl">
            Create an Account
          </Text>
          <Text className="text-textGray font-sans text-base">
            Getting started is so easy
          </Text>
        </View>

        {/* middle */}
        <ScrollView
          className="px-2 flex-1 flex-col"
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="never"
          showsVerticalScrollIndicator={false}>
          <View>
            <View className="mt-5 flex-col">
              {/* <Text className="text-black font-sans font-bold text-2xl mb-2">
                First Name
              </Text> */}
              <Input
                placeholder="First Name"
                iconName="ios-person-outline"
                onChangeText={v => setFirst(v.trim())}
              />
            </View>

            <View className="mt-5 flex-col">
              {/* <Text className="text-black font-sans font-bold text-2xl mb-2">
                Last Name
              </Text> */}
              <Input
                placeholder="Last Name"
                iconName="ios-person-outline"
                onChangeText={v => setLast(v.trim())}
              />
            </View>

            <View className="mt-5 flex-col">
              {/* <Text className="text-black font-sans font-bold text-2xl mb-2">
                Email
              </Text> */}
              <Input
                placeholder="Email Address"
                iconName="ios-mail-outline"
                onChangeText={v => setEmail(v.trim())}
              />
            </View>

            <View className="mt-5 flex-col">
              {/* <Text className="text-black font-sans font-bold text-2xl mb-2">
                Phone
              </Text> */}
              <Input
                placeholder="Phone Number"
                iconName="ios-call-outline"
                keyBoardType="number-pad"
                onChangeText={v => setPhone(Number(v.trim()))}
              />
            </View>

            <View className="mt-5 flex-col">
              {/* <Text className="text-black font-sans font-bold text-2xl mb-2">
                Password
              </Text> */}
              <Input
                placeholder="Password"
                iconName="ios-lock-closed-outline"
                password={true}
                onChangeText={v => setPassword(v.trim())}
              />
            </View>

            <View className="mt-5 flex-col">
              {/* <Text className="text-black font-sans font-bold text-2xl mb-2">
                Confirm Password
              </Text> */}
              <Input
                placeholder="Confirm Password"
                iconName="ios-lock-closed-outline"
                password={true}
                onChangeText={v => setCPassword(v.trim())}
              />
            </View>
          </View>

          <Text className="font-sans mt-5 text-textGray text-center">
            By tapping on 'Create account', you agree to the{' '}
            <Text className="font-sans text-primary-blue underline">
              Terms & Conditions
            </Text>{' '}
            that have been made available to you.
          </Text>
          <View className="w-full mt-5">
            <Buttonn
              title="Create Account "
              onPress={() => validate()}
            />
          </View>
          <View className="w-full flex-row items-center justify-center gap-2 my-4">
            <Text className="text-textGray font-sans text-base">
              Already have an account?
            </Text>
            <Pressable onPress={() => navigate('Login')}>
              <Text className="font-bold underline font-sans text-base">
                Log In
              </Text>
            </Pressable>
          </View>
        </ScrollView>


        {/* otpModal */}
      
          <Modal
            animationType='slide'
            presentationStyle='fullScreen'
            visible={showModal}
          >
            <Pressable className='m-3' onPress={() => setShowModal(false)}>
              <Icon
                name='ios-close'
                size={40}
                color='#074EEB'
              />
            </Pressable>
            <View className="flex-1  flex-col justify-center">
              <Image
                source={require('../../../assets/images/Auth-Image.png')}
                className="w-96 h-72"
                resizeMode="contain"
              />
              <View className="flex-col gap-5 px-10 mt-5">
                <Text className="text-black font-sans font-bold text-4xl">
                  Enter Otp?
                </Text>
                <Text className="text-textGray font-sans text-xl">
                  A 6 digit code has been sent to +233594045146
                </Text>
              </View>
              <View className="flex-col items-center justify-center">
                <OTPInputView
                  pinCount={6}
                // onCodeChanged={val => Logger.info(val)}
                onCodeFilled={val => setCode(val)}
                  style={{ width: '80%', height: 100 }}
                />
              </View>
              <Pressable className="self-center">
                <Text className="text-primary-blue font-sans text-xl">
                  Resend Otp
                </Text>
              </Pressable>
              <View className="px-5 mt-20">
                <Buttonn title="Verify Otp" />
              </View>
            </View>
          </Modal>
      </View>
    </>
  );
};

export default SignUpView;
