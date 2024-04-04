import React, {useEffect, useState} from 'react'
import AppHead from './AppHead'
import {Image, Button, StyleSheet, FlatList, View, TouchableOpacity, Text, ScrollView, Alert} from 'react-native'
import homeimage from '../assets/respond_me.png'
import {Entypo, MaterialCommunityIcons, EvilIcons, FontAwesome6} from '@expo/vector-icons'

export default function Inbox({navigation, route}) {

    const informationUtilisateur = {
        id_compte: route.params.id_compte, 
        nom_utilisateur: route.params.nom_utilisateur, 
        adresse_email: route.params.adresse_email, 
    }

    const [messages, setMessages] = useState([]); 

    useEffect(() => {
        getMessage(); 
    }, []); 

    const getMessage = () => {
        fetch('http://192.168.43.42:80/mini_chat/API_REST/messages/messageRecu.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_compte: informationUtilisateur.id_compte
            })
        })
        .then(response => response.json())
        .then(data => {
            setMessages(data); 
        })
        .catch(error => {
            console.error('Erreur lors de la requette POST', error); 
        })  
    };

    const renderMessageItem = ({ item }) => (
        <View style={styles.messages}>
            <Text style={styles.textMessage}>{item.id_expediteur} le {item.date_envoi}</Text>
            <Text style={styles.textMessage}>{item.contenu}</Text>
            <Button title='Supprimer' />
        </View>
    )

    return(
            <View style={styles.main}>
		        <Text style={styles.bienvenue}>Bienvenue {informationUtilisateur.nom_utilisateur}</Text>
                <View style={styles.containerImage}>
                    <Image source={homeimage}  style={styles.homeImage} />
                </View>

                <FlatList
                    data={messages}
                    renderItem={renderMessageItem}
                    keyExtractor={item => item.id_message.toString()}
                />
                <AppHead />
            </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#FFFFFF'
    },

    bienvenue: {
        textAlign: 'center',
        fontSize: 23
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
        justifyContent: 'center'
    },
  
    textButton: {
    color: 'white', 
    fontSize: 22,
    textAlign: 'center'
    }, 

    button: {
        backgroundColor: '#6c63ff'
    },

    messages: {
        padding: 15
    },

    textMessage: {
        fontSize: 22,
    }
})