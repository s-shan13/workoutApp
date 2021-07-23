import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView  } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const WorkoutName = (props) => {

    return(
        <KeyboardAvoidingView>

            {/* main display */}
            <View style={styles.titleWrapper}>

                {/* title display */}
                <Text style={styles.titleText}>{props.text}</Text>

                
            </View>

        </KeyboardAvoidingView>
    );
    

}

const styles = StyleSheet.create({
    titleWrapper: {
        flexDirection: 'row',
        width: 300,
        height: 45,
        backgroundColor: 'gray',
        padding: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 15,
        flexWrap:'wrap'
    },

    titleText: {
        color: '#E7E7E7',
        fontSize: 17,
    },

    crossWrapper: {
        backgroundColor:'gray',
        height: 17,
        width: 17,
        position: 'absolute',
        left: 10,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default WorkoutName;