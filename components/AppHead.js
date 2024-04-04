import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Octicons} from '@expo/vector-icons'

export default function AppHead() {
    return(
        <View style={styles.appTitle}>
            <View style={styles.logoContainer}>
                <Octicons name="comment-discussion" size={95} color="black" />
            </View>
            <View>
                <Text style={styles.textAppTitle}>Hafatro</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textAppTitle: {
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 34, 
    },

    logoContainer: {
        display: 'flex', 
        alignItems: 'center',
        marginTop: 10
    }
});