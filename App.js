import React from 'react';
import LoginScreeen from './app/Screens/LoginScreen';
import signupScreen from './app/Screens/signupScreen';
import homeScreen from './app/Screens/homeScreen';
import specificWorkout from './app/Screens/specificWorkout'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const authStack = createStackNavigator();

export default function App() {
  
  return (
    
    <NavigationContainer>

      <authStack.Navigator initialRouteName="specificworkout">

        {/* Login screen */}
        <authStack.Screen 
          name ="Login" 
          component={LoginScreeen} 
          options={{title: 'Login', 
           headerStyle: {backgroundColor: '#282626'},
           headerTintColor: '#E7E7E7',
           headerTitleAlign:'center' 
          }}
        />

        {/* sign in screen */}
        <authStack.Screen 
          name = "sign up" 
          component={signupScreen}
          options={{title: 'Create account', 
           headerStyle: {backgroundColor: '#282626'},
           headerTintColor: '#E7E7E7',
           headerTitleAlign:'center'
          }}
        />

        {/* Add workouts (main) screen */}
        <authStack.Screen
          name="home Screen"
          component={homeScreen}
          options={{title: 'Your workouts', 
           headerStyle: {backgroundColor: '#282626'},
           headerTintColor: '#E7E7E7',
           headerTitleAlign:'center',
          }}
        />

        {/* specific workout screen */}
        <authStack.Screen
          name='specificworkout'
          component={specificWorkout}
          options={{title:'Workout', 
           headerStyle: {backgroundColor: '#282626'},
           headerTintColor: '#E7E7E7',
           headerTitleAlign:'center',
          }}
        />

      </authStack.Navigator>
      
    </NavigationContainer>
    );
  }



