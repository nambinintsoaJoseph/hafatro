import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import signin from '../assets/sign_in.png'

function SignInImage() {
    return(
        <Image source={signin} style={styles.signin}/>
    )
}

const styles = StyleSheet.create({
    signin: {
        width: 350,
        height: 220
    }
})

export default SignInImage