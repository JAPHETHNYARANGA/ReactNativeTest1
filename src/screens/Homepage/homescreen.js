import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomInput from '../../components/customInput/CustomInput';

const Homescreen = () => {
    const [userName, setUserName] = useState('');

    return (
        <>
         <View style={styles.container}>
            <Text style={styles.root}>Discover</Text>
            <CustomInput placeholder="Search Location/Speciality" value={userName} setValue={setUserName} />

        </View>
        <View style={styles.sideBySideContainer}>
            <View style={styles.leftContainer}>
                <Text style={styles.rootText}>Weekly Progress</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.rootText}>Weekly Running</Text>
            </View>
        </View>
        <View style={styles.sideBySideContainer}>
            <View style={styles.leftContainer}>
                <Text style={styles.rootText}>Daily Cycling</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.rootText}>Morning Yoga</Text>
            </View>
        </View>
        <View>
            <Text>Activity Feed</Text>
        </View>

        </>
       
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        flex: 0.3, 
        padding: 20
    },
    sideBySideContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftContainer: {
        backgroundColor: '#fff',
        flex: 0.48,
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    rightContainer: {
        backgroundColor: '#fff',
        flex: 0.48,
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    root: {
        paddingTop: 30,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    rootText: {
        paddingTop: 30,
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default Homescreen;
