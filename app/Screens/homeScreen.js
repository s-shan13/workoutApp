import React, { useState } from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import WorkoutName from '../components/WorkoutTitle';
import { color } from 'react-native-reanimated';


export default function homeScreen({navigation}) {

    const [title, setTitle] = useState('');
    const [workouts, setWorkouts] = useState([]);

    const addTitle = () => {
        setWorkouts([...workouts, title])
        setTitle(null);
    }

    // const deleteWorkout = (index) => {
    //     let workoutCopy = [...workouts];
    //     workoutCopy.splice(index, 1);
    //     setWorkouts(workoutCopy);
    // }

    return (
        <View style={styles.container}>

            {/* View for the add buttons */}
            <TouchableOpacity style={styles.plusWrapper} onPress={() => addTitle()}>
                <View>
                    <Text style={styles.plus}>+</Text>
                </View> 
            </TouchableOpacity>

            <KeyboardAvoidingView style={styles.inputWrapper} behavior={Platform.OS==='android'? 'height':'padding'}>
                <TextInput 
                    style={styles.input} 
                    placeholder={'Enter workout name'}
                    value={title}
                    onChangeText={setTitle}
                />
            </KeyboardAvoidingView>

            {/* outputting the workout titles */}
            <View style={styles.titleWrapper}>
                {
                    workouts.map((item, index) => {
                        return(
                            <>
                            <TouchableOpacity key={index} onPress={() => navigation.navigate('specificworkout')}>
                                <WorkoutName text={item} />
                            </TouchableOpacity>

                            {/* <TouchableOpacity style={styles.crossWrapper} onPress={()=>deleteWorkout(index)}>
                                <View>
                                    <Text style={{color:'black'}}>X</Text>
                                </View>
                            </TouchableOpacity> */}
                            </>
                        )
                    })
                }
            </View>


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
        paddingTop: Platform.OS === "android"? StatusBar.currentHeight : 0,
    },

    plus: {
        color: '#E7E7E7',
        fontSize: 70,
    },

    inputWrapper: {
        position: 'absolute',
        top: 570,
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

    plusWrapper: {
        position:'absolute', 
        top:540,
        left: 320, 
        width:60,
        alignContent: 'center',
        justifyContent: 'center'
    },

    titleWrapper: {
        marginTop:5
    }
})
