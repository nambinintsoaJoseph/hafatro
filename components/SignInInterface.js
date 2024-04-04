import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Alert, Button, TextInput, Text, TouchableOpacity } from 'react-native'

import AppHead from './AppHead'
import SignInImage from './SignInImage'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function SignInInterface({navigation}) {
    const [nom, definirNom] = useState(''); 
    const [email, definirEmail] = useState(''); 
    const [motdepasse, definirMotDePasse] = useState('');

    const creerCompte = () => {
        fetch('http://192.168.43.42:80/mini_chat/API_REST/compte_utilisateur/creer_un_compte.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom_utilisateur: nom, 
                adresse_email: email, 
                mot_de_passe: motdepasse
            })
        })
        .then(response => response.json())
        .then(data => {
            // On affiche le réponse de l'API dans l'application : 
            Alert.alert(data.message); 
        })
        .catch(error => {
            console.error('Erreur lors de la requette POST', error); 
        })  
    };

    return(
        <ScrollView>
            <View style={styles.main}>
                <AppHead />

                <View>
                    <Text style={styles.label}>Nom et prénom : </Text>
                    <TextInput
                        placeholder='Saisir votre nom complet *'
                        style={styles.input}
                        onChangeText={(val) => definirNom(val)}
                    />

                    <Text style={styles.label}>Adresse email : </Text>
                    <TextInput
                        placeholder='Saisir votre email *'
                        style={styles.input}
                        onChangeText={(val) => definirEmail(val)}
                    />  

                    <Text style={styles.label}>Mot de passe : </Text>
                    <TextInput
                        placeholder='Saisir votre mot de passe *'
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(val) => definirMotDePasse(val)}
                    /> 
                </View>

                <TouchableOpacity
                    onPress={creerCompte}
                    activeOpacity={1}
                    style={[styles.buttonContainer, {backgroundColor: '#0077b3'}]}
                >
                    <MaterialCommunityIcons name="account-plus" size={24} color="white" />
                    <Text style={styles.textButton}> Créer mon compte</Text>
                </TouchableOpacity>

                <SignInImage />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#FFF'
    },

    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        margin: 10, 
        padding: 10,
        borderRadius: 5,
        fontSize: 18
    }, 

    label: {
        marginLeft: 10, 
        fontSize: 18
    }, 

    buttonContainer: {
        margin: 10, 
        padding: 8, 
        borderRadius: 5,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center'
    }, 

    textButton: {
        color: 'white', 
        fontSize: 22,
        textAlign: 'center'
    }
})