import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import login from '../assets/login.png'

function LoginImage() {
    return(
        <View style={styles.containerLoginImage}>
            <Image source={login} style={styles.loginImage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    loginImage: {
        width: 150,
        height: 150, 
    },

    containerLoginImage: {
        display: 'flex',
        alignItems: 'center'
    }
})

export default LoginImage