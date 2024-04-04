import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ConnectionInterface from './components/ConnectionInterface'
import SignInInterface from './components/SignInInterface'
import Home from './components/Home'
import NewMessage from './components/NewMessage'
import Inbox from './components/Inbox'

const Stack = createNativeStackNavigator(); 

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='ConnectionInterface'
          component={ConnectionInterface}
          options={{title: 'Bienvenue sur Hafatro'}}
        />
        <Stack.Screen 
          name='SignInInterface'
          component={SignInInterface}
          options={{title: 'Création de votre compte'}}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{title: "Acceuil - Hafatro"}}
        />
        <Stack.Screen 
          name='NewMessage'
          component={NewMessage}
          options={{title: "Erire un nouveau message"}}
        />
        <Stack.Screen 
          name='Inbox'
          component={Inbox}
          options={{title: 'Boite de récéption'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
});