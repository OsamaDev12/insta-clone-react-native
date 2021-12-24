import * as React from 'react';
import { Text, View ,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Chats() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chats!</Text>
    </View>
  );
}

function Calls() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calls!</Text>
    </View>
  );
}


function Requests() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Request!</Text>
    </View>
  );
}


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <Tab.Navigator  style={{flex: 1,paddingTop: StatusBar.currentHeight}}>
        <Tab.Screen  name="Chats" component={Chats} />
        <Tab.Screen name="Calls" component={Calls} />
        <Tab.Screen name="Requests" component={Requests} />

      </Tab.Navigator>
  );
}
