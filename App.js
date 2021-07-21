import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreeen from './app/Screens/LoginScreen';
import signupScreen from './app/Screens/signupScreen';
import homeScreen from './app/Screens/homeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// try: Create a new file with a function to return a view. 
// Import the file into homeScreen and call the function everytime + is 
// clicked. The function should take in the title of the view as a prop

const authStack = createStackNavigator();

export default function App() {
  
  return (
    
    <NavigationContainer>

      <authStack.Navigator initialRouteName="home Screen">
        <authStack.Screen 
          name ="Login" 
          component={LoginScreeen} 
          options={{title: 'Login', 
           headerStyle: {backgroundColor: '#282626'},
           headerTintColor: '#E7E7E7',
           headerTitleAlign:'center' 
          }}
        />
        <authStack.Screen 
          name = "sign up" 
          component={signupScreen}
          options={{title: 'Create account', 
           headerStyle: {backgroundColor: '#282626'},
           headerTintColor: '#E7E7E7',
           headerTitleAlign:'center'
          }}
        />
        <authStack.Screen
          name="home Screen"
          component={homeScreen}
          options={{title: 'Your workouts', 
           headerStyle: {backgroundColor: '#282626'},
           headerTintColor: '#E7E7E7',
           headerTitleAlign:'center',
          }}
        />
      </authStack.Navigator>
      
    </NavigationContainer>
    );
  }



