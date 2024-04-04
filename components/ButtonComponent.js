import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function ButtonComponent({textButton}) {
    return(
        <TouchableOpacity
            style = {{
                margin: 10, 
                padding: 10, 
                borderRadius: 5,
                flexDirection: 'row', 
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text style={{
                color: 'white', 
                fontSize: 22,
                textAlign: 'center'
            }}>{textButton}</Text>
        </TouchableOpacity>
    )
}
