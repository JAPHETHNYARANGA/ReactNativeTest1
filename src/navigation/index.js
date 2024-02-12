import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Homescreen from '../screens/Homepage/homescreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="signIn" screenOptions={{ headerShown:false }}>
                <Stack.Screen name="signIn" component={SignInScreen} />
                <Stack.Screen name="signUp" component={SignUpScreen} />
                <Stack.Screen name="home" component={Homescreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Navigation;
