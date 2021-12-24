import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Components/LoginSign/Login';
import Signup from './Components/LoginSign/Signup';
import Dash from './Components/Dash'
import Messenger from './Components/Messenger';

// import firebase from './firebase'


import firebase from "firebase"

// import { collection } from '@firebase/firestore';
// import { addDoc} from '@firebase/firestore';
// import { doc } from '@firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6YEF1DcsxU8xwUucyQ6bpc4d6TPe_U3E",
  authDomain: "clone-f0319.firebaseapp.com",
  projectId: "clone-f0319",
  storageBucket: "clone-f0319.appspot.com",
  messagingSenderId: "1077035661045",
  appId: "1:1077035661045:web:3e93be5ce7e4f0fca437bc"
};

firebase.initializeApp(firebaseConfig);


const Stack = createNativeStackNavigator ();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{headerShown:false}} >
          <Stack.Screen 
            name="Login"
            component= {Login}
          />
         <Stack.Screen
            name="Signup"
            component= {Signup}
          />
          <Stack.Screen
            name="Dash"
            component= {Dash}
          />
          <Stack.Screen
            name="Messenger"
            component= {Messenger}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      // backgroundColor: "pink"
    },
     header: {
        fontSize: 32,
        fontWeight: "bold",
        marginTop: "10%",
        marginHorizontal: '30%'
      },
      add: {
        fontSize: 20,
          // width: 60,
          // height: 60,
  
  
     },
   
      input: {
        paddingVertical: 6,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 50,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 300,
    
      },
       addWrapper: {
        width: 100,
        height: 30,
        backgroundColor: 'gray',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        marginLeft: 100,
        
      },
  });