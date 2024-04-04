import React, {useState} from 'react'
import AppHead from './AppHead'
import {Image, StyleSheet, View, TouchableOpacity, Text, ScrollView, Alert, TextInput} from 'react-native'
import homeimage from '../assets/respond_me.png'

export default function NewMessage({navigation, route}) {
    const informationUtilisateur = {
        id_compte: route.params.id_compte, 
        nom_utilisateur: route.params.nom_utilisateur, 
        adresse_email: route.params.adresse_email, 
    } 
    
    const [email, definirEmail] = useState(''); 
    const [message, definirMessage] = useState('');

    const sendMessage = () => {
        fetch('http://192.168.43.42:80/mini_chat/API_REST/messages/envoyer.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                adresse_email: email, 
                contenu: message,
                id_expediteur: informationUtilisateur.id_compte, 
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
    }

    return(
        <ScrollView>
            <View style={styles.main}>
		        <Text style={styles.bienvenue}>Bienvenue {informationUtilisateur.nom_utilisateur}</Text>
                <View style={styles.containerImage}>
                    <Image source={homeimage}  style={styles.homeImage} />
                </View>

                <View>
                    <TextInput
                        placeholder='Email du destinataire'
                        style={styles.input}
                        onChangeText={(val) => definirEmail(val)}
                    />

                    <TextInput
                        placeholder='Message'
                        style={[styles.input, styles.messages]}
                        onChangeText={(val) => {definirMessage(val)}}
                    />

                    <TouchableOpacity 
                        style={[styles.buttonContainer]}
                        activeOpacity={1}
                        onPress={() => {
                            sendMessage();
                            navigation.navigate('Home', informationUtilisateur); 
                        }}
                    >
                        <Text style={styles.textButton}>  Envoyer</Text>
                    </TouchableOpacity>
                </View>
            
                <AppHead />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#FFFFFF'
    },
    
    containerImage: {
        alignItems: 'center'
    },
    
    homeImage: {
        width: 200, 
        height: 200, 
    }, 

    buttonContainer: {
        margin: 10, 
        padding: 8, 
        borderRadius: 5,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6c63ff',
    },
  
    textButton: {
    color: 'white', 
    fontSize: 22,
    textAlign: 'center'
    }, 

    bienvenue: {
        textAlign: 'center',
        fontSize: 23
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

    messages: {
        height: 150,
        paddingBottom: 110
    }
})