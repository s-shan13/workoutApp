import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function specificWorkout({navigation}) {
    return (
        <View style={styles.container}>
            <Text>lol</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        flexWrap: 'wrap',
        backgroundColor: '#282626',
        
    },
})

