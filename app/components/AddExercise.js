import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView  } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const AddExercise = (props) => {

    return(
        <KeyboardAvoidingView>

            {/* main display */}
            <View style={styles.backDrop}>

                {/* title display */}
                <Text style={styles.titleText}>{props.NameText}</Text>
                <Text style={styles.titleText}>{props.setRepsText}</Text>

                
            </View>

        </KeyboardAvoidingView>
    );
    

}

const styles = StyleSheet.create({
    backDrop: {
        flexDirection: 'row',
        width: 300,
        height: 75,
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
        marginBottom: 5
    },

})

export default AddExercise;