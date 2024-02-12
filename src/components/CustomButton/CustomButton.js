import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type="PRIMARY" ,container }) => {
    return (
        <Pressable onPress={onPress} style = {[styles.container, styles[container]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable >
    );
}

const styles = StyleSheet.create({
    container :{

        width:'100%',

        padding:15,
        marginVertical:5,

        alignItems:'center',
        borderRadius:5
    },
    container_PRIMARY:{
        backgroundColor:'#3b71f3',
    },
    container_TERTIARY:{
        backgroundColor:'#3b71f3',
    },
    container_SECONDARY:{
        borderColor:'red',
        borderWidth:1

    },
    text_PRIMARY :{
        
        fontWeight:'bold',
        color:'white'
    },
    text_TERTIARY :{
        fontWeight:'bold',
        color:'gray',
    },
    text_SECONDARY :{
        fontWeight:'bold',
        color:'black',
    }
})

export default CustomButton;
