import React from 'react'
import AppHead from './AppHead'
import {Image, StyleSheet, View, TouchableOpacity, Text, ScrollView, Alert} from 'react-native'
import homeimage from '../assets/respond_me.png'
import {Entypo, MaterialCommunityIcons, EvilIcons, FontAwesome6} from '@expo/vector-icons'

export default function Home({navigation, route}) {
    const informationUtilisateur = {
        id_compte: route.params.id_compte, 
        nom_utilisateur: route.params.nom_utilisateur, 
        adresse_email: route.params.adresse_email, 
    }

    return(
        <ScrollView>
            <View style={styles.main}>
		        <Text style={styles.bienvenue}>Bienvenue {informationUtilisateur.nom_utilisateur}</Text>
                <View style={styles.containerImage}>
                    <Image source={homeimage}  style={styles.homeImage} />
                </View>

                <View>
                    
                    <TouchableOpacity style={[styles.buttonContainer, styles.button]} activeOpacity={1} onPress={() => {navigation.navigate('NewMessage', informationUtilisateur)}}>
                        <Entypo name="new-message" size={24} color="white" />
                        <Text style={styles.textButton}> Nouveau message</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonContainer, styles.button]} activeOpacity={1} onPress={() => {navigation.navigate('Inbox', informationUtilisateur)}}>
                        <Entypo name="mail" size={24} color="white" />
                        <Text style={styles.textButton}>  Boite de récéption</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonContainer, styles.button]} activeOpacity={1}>
                        <MaterialCommunityIcons name="email-send" size={24} color="white" />
                        <Text style={styles.textButton}>  Message envoyé</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonContainer, styles.button]} activeOpacity={1}>
                        <FontAwesome6 name="user-gear" size={24} color="white" />
                        <Text style={styles.textButton}> Modifier mon profil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: '#b30000'}]} activeOpacity={1}
                        onPress={() => {
                            navigation.navigate('ConnectionInterface')
                        }}
                     >
                        <Entypo name="log-out" size={24} color="white" />
                        <Text style={styles.textButton}>  Deconnexion</Text>
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

    bienvenue: {
        textAlign: 'center',
        fontSize: 23
    }
})