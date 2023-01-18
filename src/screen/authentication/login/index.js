import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { setErrorText, setEmail, setPassword, setSecureText, setAnimatedLogo } from "../../../redux/authentication/login/reducer";
import Theme from '../../../theme/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import { FormInput } from "../../../components/FormInput";
import ButtonGradient from '../../../components/buttons';
import Color from '../../../theme/colors/colors';
import { loginAction } from '../../../redux/authentication/login/action';
import styles from './styles';
import Loader from '../../../components/loader/simpleLoader/Loader';
import { MailIcon, PasswordMainIcon } from "../../../assets/svg";

const Login = ({ navigation }) => {
  const dispatch = useDispatch()
  const { email, password, secureText, animatedLogo, errortext, loginLoader } = useSelector((state) => state.loginApi);

  const submit = () => {
    Keyboard.dismiss()
    loginAction({ navigation, email, password })
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAnimatedLogo(false))
    }, 3000);
  }, [])


  return (
    <SafeAreaView style={Theme.container}>
      <Loader animating={loginLoader} />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={Theme.container}>
        <View style={styles.gifContainer}>
          <Image source={animatedLogo ? require('../../../assets/gifs/workPlace.gif') : require('../../../assets/images/grop.png')} style={animatedLogo ? styles.gif : styles.img} />
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Welcome!</Text>
          <Text style={styles.secondaryTitle}>Login to your account.</Text>
        </View>
        <View style={styles.loginFieldContainer}>
          <FormInput
            placeholder="Email"
            containerStyle={styles.formInputContainer}
            keyboardType="email-address"
            onChangeText={(text) => { dispatch(setErrorText('')), dispatch(setEmail(text.trim())) }}
            LeftChild={<MailIcon style={styles.mailIcon} />}
            textInputContainerStyle={styles.textInputContainerStyle}
            style={styles.textInput}
            placeholderTextColor={Color.placeholderColor}
            value={email}
            error={errortext === 'Please Enter Your Email' ? 'Please Enter Your Email' : errortext === 'Email format is invalid' ? 'Email format is invalid' : null}
          />

          <FormInput
            placeholder="Password"
            containerStyle={styles.formInputContainer}
            onChangeText={(text) => { dispatch(setErrorText('')), dispatch(setPassword(text.trim())) }}
            forget={true}
            secureTextEntry={secureText}
            LeftChild={<PasswordMainIcon style={styles.passwordMainIcon} />}
            RightChild={<Entypo onPress={() => dispatch(setSecureText(!secureText))} color={Color.mehroonRed} size={20} style={styles.eyeIcon} name={secureText ? "eye-with-line" : "eye"} />}
            textInputContainerStyle={styles.textInputContainerStyle}
            style={styles.textInputPassword}
            placeholderTextColor={Color.placeholderColor}
            forgetPassword={() => navigation.navigate('PasswordRecovery')}
            value={password}
            error={errortext === 'Please Enter Your Password' ? 'Please Enter Your Password' : null}
          />

          <ButtonGradient style={styles.gradientButtonStyle} onPress={submit} title={"Login"} />
          <Text style={styles.dontText}>Don't have an account? <Text onPress={() => navigation.navigate('SignUp')} style={styles.goSignUp}>Sign Up</Text> </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Login;