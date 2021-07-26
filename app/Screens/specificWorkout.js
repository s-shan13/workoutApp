import React from 'react';
import {View, Text, StyleSheet, Platform, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react/cjs/react.development';
import AddExercise from '../components/AddExercise';

export default function specificWorkout({navigation}) {

    // storing the exercise name
    const [exerName, setExerName] = useState('')
    const [exerNameArr, setexerNameArr] = useState([])

    // storing sets and reps
    const [setReps, setSetReps] = useState('')
    const [setRepsArr, setSetRepsArr] = useState([])

    return (
        // main view
        <KeyboardAvoidingView style={styles.container}>

            {/* Plus button */}
            <TouchableOpacity style={styles.plusWrapper}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
            
            {/* input for exerName and setReps */}
            <KeyboardAvoidingView style={styles.NameinputWrapper} behavior={Platform.OS==='android'? 'height':'padding'}>
                <TextInput 
                    style={styles.input} 
                    placeholder={'Enter exercise name'}
                    value={exerName}
                    onChangeText={setExerName}
                />
            </KeyboardAvoidingView>

            {/* input for sets and reps */}
            <KeyboardAvoidingView style={styles.setRepsInputWrapper}>
                <TextInput 
                    style={styles.input} 
                    placeholder={'Enter set and reps'}
                    value={setReps}
                    onChangeText={setSetReps}
                />
            </KeyboardAvoidingView>

            <AddExercise/>

        </KeyboardAvoidingView>
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

    plus: {
        color: '#E7E7E7',
        fontSize: 40
    },

    plusWrapper: {
        position: 'absolute',
        backgroundColor: '#282626',
        height:40,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: '85%',
        left: '80%'
    },

    NameinputWrapper: {
        position: 'absolute',
        top: '80%',
        left: 30,
        width: '65%',
        justifyContent: 'center',
        alignContent:'center',
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 10
    },

    setRepsInputWrapper: {
        position: 'absolute',
        top: '90%',
        left: 30,
        width: '65%',
        justifyContent: 'center',
        alignContent:'center',
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 10
    },

    input: {
        color: '#E7E7E7',
        width: '100%'
    },
})

