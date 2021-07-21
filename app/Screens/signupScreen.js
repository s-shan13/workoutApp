import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import firebase from '../fire'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function signupScreen({navigation}) {

    const [newUserName, setNewUserName] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const signUp = async() => {
        const response = await firebase.auth().createUserWithEmailAndPassword(newUserName, newPassword);
        navigation.navigate('Login');
    }

    return(
        <View style={styles.container}>
            
            <View>

                {/* Texts for the page */}
                <Text style={styles.usernameText}>Create username:</Text>

                <Text style={styles.passwordText}>Create password:</Text>

                {/* Input boxes for the page */}
                <TextInput 
                    style={styles.usernameInput}
                    placeholder=' Eg: TheLegend27'
                    onChangeText={setNewUserName}
                    value={newUserName}
                />

                <TextInput
                    style={styles.passwordInput}
                    placeholder=' Enter a password'
                    secureTextEntry
                    onChangeText={setNewPassword}
                    value={newPassword}
                />

            </View>

            {/* View for 'create account' button */}
            <View style={styles.createbtn}>
                <Text 
                    style={{top:7, left:30}}
                    onPress={()=> signUp()}
                >Create account</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282626',
        paddingTop: Platform.OS === "android"? StatusBar.currentHeight : 0
    },

    usernameText: {
        color: "#E7E7E7",
        height: 150,
        width: 150,
        top: 40,
        left: 20,
        fontSize: 18,
        borderColor:'gray'
    },

    passwordText: {
        color: "#E7E7E7",
        height: 100,
        width: 200,
        top: 10,
        left: 20,
        fontSize: 18,
    },

    usernameInput: {
        position: 'absolute',
        borderWidth:3,
        borderRadius: 12,
        borderColor: 'gray',
        top: 70,
        left:20,
        width:350,
        fontSize:20,
        backgroundColor:'gray',
        color: 'black'
    },

    passwordInput: {
        position: 'absolute',
        borderWidth:3,
        borderRadius: 12,
        borderColor: 'gray',
        top: 190,
        left:20,
        width:350,
        fontSize:20,
        backgroundColor:'gray',
        color: 'black'
    },

    confirmInput: {
        position: 'absolute',
        borderWidth:3,
        borderRadius: 12,
        borderColor: 'gray',
        top: 305,
        left:20,
        width:350,
        fontSize:20,
        backgroundColor:'gray',
        color: 'black'
    },
    
    createbtn: {
        position:'absolute',
        backgroundColor: 'gray',
        height:35,
        width: 160,
        borderRadius: 12,
        top:300,
        left:210
    }
})

