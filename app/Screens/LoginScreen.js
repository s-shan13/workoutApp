import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import firebase from '../fire'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { useState } from '@react/cjs/react.production.min';


const LoginScreeen = ({ navigation }) => {

  const [usrname, setUsrname] = useState('');
  const [passwrd, setPasswrd] = useState('');

  const signIn = async() => {
    const response = await firebase.auth().signInWithEmailAndPassword(usrname, passwrd);
    navigation.navigate('home Screen');
}

  return (
    
    <SafeAreaView style={styles.container}>
 
      <View style={{alignItems: "center"}}>

        {/* Text for the username text */}
        <Text style={styles.usrnamePsswrdText}>Username:</Text>

        {/* Text for the password text */}
        <Text style={styles.usrnamePsswrdText}>Password:</Text>

        {/* Text to take user to sign up screen */}
        <Text style={styles.navText}>Don't have an account?</Text>

        {/* text boxes */}
        <TextInput
          style={styles.userNameInput}
          placeholder=' Enter username'
          onChangeText={setUsrname}
          value={usrname}
        />

        <TextInput
          style={styles.passwordInput}
          placeholder=' Enter password'
          secureTextEntry
          onChangeText={setPasswrd}
          value={passwrd}
         />

      </View>

      {/* view for 'create account' button */}
      <View style={styles.btnView}>
        <Text style={styles.btntxt} onPress={() => navigation.navigate('sign up')}>Create account</Text> 
      </View>

      {/* View for sign in button */}
      <View style={styles.signInbtn}>
        <Text 
          style={{left:8,  top:5}}
          onPress={()=> signIn()}
        >Sign in</Text>
      </View>

    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282626',
        paddingTop: Platform.OS === "android"? StatusBar.currentHeight : 0
    },

    navText : {
        color: "#E7E7E7",
        height: 90,
        width: 220,
        top: 80,
        fontSize: 20,
    },

    usrnamePsswrdText: {
        color: "#E7E7E7",
        height: 150,
        width: 90,
        top: 60,
        left: -110,
        fontSize: 18,
    },

    btnView: {
      color:"#282626",
      top:20,
      width:150,
      left:120
    },
    
    btntxt: {
      color:"#8FF4FF",
      height: 150,
      width: 110,
      left: -25,
      fontSize: 16
    },

    userNameInput: {
      borderRadius: 12,
      borderColor: 'gray',
      borderWidth: 3,
      position: 'absolute',
      top: 100,
      width: 300,
      backgroundColor: 'gray',
      color: 'black',
      fontSize:20
    },

    passwordInput: {
      borderRadius: 12,
      borderColor: 'gray',
      borderWidth: 3,
      position: 'absolute',
      top: 250,
      width: 300,
      backgroundColor: 'gray',
      color: 'black',
      fontSize:20
    },

    signInbtn: {
      position:'absolute',
      top: 320,
      left: 285,
      height: 30,
      width:60,
      backgroundColor: 'gray',
      borderRadius: 12
    }
})

export default LoginScreeen;