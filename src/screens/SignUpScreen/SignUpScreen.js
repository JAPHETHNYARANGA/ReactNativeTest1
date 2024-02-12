import React, { useState } from 'react';
import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
        console.warn('Sign In');
    }

    const onLoginPressed = () =>{
        navigation.navigate('signIn')
    }

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    return (
        <View style = {styles.root}>
            <Text style={styles.title}> Create an Account</Text>

            <CustomInput placeholder = "userName" value={userName} setValue={setUserName} />
            <CustomInput placeholder = "Email" value={userName} setValue={setEmail} />
            <CustomInput placeholder = "Password" value={password} setValue={setPassword} secureTextEntry />
            <CustomInput placeholder = "Password Repeat" value={passwordRepeat} setValue={setPasswordRepeat} />
            <CustomButton text={"Register"} onPress={onRegisterPressed} container="container_PRIMARY" />
            
            <CustomButton text={"Already have an account? Login"} onPress={onLoginPressed} container="container_SECONDARY" type="SECONDARY" />
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#051c60',
        margin:10
    }
})

export default SignUpScreen;
