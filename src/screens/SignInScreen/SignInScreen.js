import React, { useState } from 'react';
import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.jpeg';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        navigation.navigate('home');
    }

    const onForgotPasswordPressed = () =>{
        navigation.navigate('signUp')
    }

    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    return (
        <View style = {styles.root}>
            <Image source={Logo} style = {[styles.logo , {height:height * 0.3}]} />

            <CustomInput placeholder = "userName" value={userName} setValue={setUserName} />
            <CustomInput placeholder = "Password" value={password} setValue={setPassword} secureTextEntry />
            <CustomButton text={"Sign In"} onPress={onSignInPressed} container="container_PRIMARY" />

            <CustomButton text={"Forgot Password"}  type="TERTIARY"  />

            <CustomButton text={"Sign in with FaceBook"}  container="container_SECONDARY" type="SECONDARY" />

            <CustomButton text={"Sign in with Google"}  container="container_SECONDARY" type="SECONDARY" />

            <CustomButton text={"Sign in with Apple"} container="container_SECONDARY" type="SECONDARY" />
            
            <CustomButton text={"Don't have an account? create one"} onPress={onForgotPasswordPressed} container="container_SECONDARY" type="SECONDARY" />
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20
    },
    logo:{
        width:'70%',
        maxWidth:300,
        height:100,
    }
})

export default SignInScreen;
