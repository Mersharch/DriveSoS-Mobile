import {
  Image,
  Modal,
  Pressable,
  Text,
  KeyboardAvoidingView,
  View,
  Platform,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Logger from '../../utils/Logger';
import Buttonn from '../../components/ui/Buttonn';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../components/ui/Input';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthParamlist } from '../../Navigation/NavTypes';
import FullScreenLoader from '../../components/ui/FullScreenLoader';



const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { goBack } = useNavigation<NavigationProp<AuthParamlist>>();

  const validate = () => {
    setLoading(true);
    setTimeout(() => {
      const message =
        !email
          ? 'fill field'
          : !email.match(
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]{3,}(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            )
          ? 'invalid email format'
          : 'success';
      setLoading(false);      
      message === 'success' ? setShowModal(true) : Alert.alert(message);
    }, 1500);

  };


  return (
    <>
    {loading && <FullScreenLoader />}
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      className="flex-1 bg-primary-white">
              <Pressable className='m-3' onPress={() => goBack()}>
                  <Icon
                      name='chevron-back-outline'
                      size={40}
                      color='#074EEB'
                  />
              </Pressable>
        <View className="flex-1  flex-col">
          <Image
            source={require('../../../assets/images/Auth-Image.png')}
            className="w-96 h-72"
            resizeMode="contain"
          />
          <View className="flex-col gap-5 px-10 mt-5">
            <Text className="text-black font-sans font-bold text-4xl">
              Forgot Password?
            </Text>
          <Text className="text-textGray font-sans text-xl">
            Dont worry! it happens. Please enter your email
            </Text>
          </View>
          <View className="flex-col items-center justify-center mt-5 px-4">
          <Input
            placeholder='Email Address'
            iconName='mail-outline'
            onChangeText={v => setEmail(v.trim())}
          />
          </View>
          <Pressable className="self-center mt-2">
            <Text className="text-primary-blue font-sans text-xl">
              Resend
            </Text>
          </Pressable>
          <View className="px-5 mt-20">
            <Buttonn title="Verify" onPress={() => validate()} />
          </View>
      </View>
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
      </KeyboardAvoidingView>
      </>
  );
};

export default ForgotPassword;
