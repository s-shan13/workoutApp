import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView  } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const AddExercise = (props) => {

    return(
        <KeyboardAvoidingView>

            {/* main display */}
            <View style={styles.backDrop}>

                {/* view for exercide name */}
                <View style={styles.nameTextWrapper}>
                    <Text style={styles.nameText}>{props.NameText}</Text>
                </View>

                {/* View for set and reps */}
                <ScrollView style={styles.setRepsWrapper}>
                    <Text style={styles.setRepsText}>{props.setRepsText}</Text>
                </ScrollView>
                
            </View>

            

        </KeyboardAvoidingView>
    );
    

}

const styles = StyleSheet.create({
    backDrop: {
        flexDirection: 'row',
        width: 300,
        height: 90,
        backgroundColor: 'gray',
        padding: 5,
        marginBottom: 10,
        //justifyContent: 'center',
        //alignItems:'center',
        borderRadius: 15,
        flexWrap:'wrap', 
        
    },

    nameText: {
        color: '#E7E7E7',
        fontSize: 20,
        marginBottom: 5
    },

    setRepsText: {
        color: '#E7E7E7',
        fontSize: 15,
        marginBottom: 5,
        top: 1
    },

    nameTextWrapper: {
        backgroundColor: 'gray', 
        width: '95%',
        height: '30%',
        marginBottom: 10,
        marginLeft: 10
    },

    setRepsWrapper: {
        backgroundColor: 'gray', 
        width: 250,
        height: '40%',
        marginLeft: 10

    }
})

export default AddExercise;