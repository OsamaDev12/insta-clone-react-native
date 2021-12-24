import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Our Components
import Home from './Home';
import Search from './Search';
import Add from './Add';
import Heart from './Heart';
import User from './User';


const Tab = createBottomTabNavigator();

export default function Dash() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarLabel:'',

          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home-outline'
                      : 'home-outline'
                  }
                  size={30}
                  color={color}
                  style={{marginTop:5 , fontWeight:'900'}}
                />
              );
            } else if (route.name === 'Search') {
              return (
                <Ionicons
                  name={focused ? 'search' : 'search'}
                  size={30}
                  color={color}
                  style={{marginTop:5 , fontWeight:'900'}}
                />
              );
            } else if (route.name === 'Add') {
              return (
                <Feather
                  name={focused ? 'plus-square' : 'plus-square'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Heart') {
              return (
                <Ionicons
                  name={focused ? 'heart-outline' : 'heart-outline'}
                  size={30}
                  color={color}
                  style={{marginTop:5 , fontWeight:'900'}}
                />
              );
            } else if (route.name === 'User') {
              return (
                <AntDesign
                  name={focused ? 'user' : 'user'}
                  size={30}
                  color={color}
                  style={{marginTop:5 , fontWeight:'bold'}}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'black',
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
        // options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Heart" component={Heart} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
  );
}