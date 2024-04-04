import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { Alert, ScrollView, Text, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native'
import AppHead from './AppHead'
import LoginImage from './LoginImage'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

export default function ConnectionInterface({navigation}) {
    const [email, definirEmail] = useState(''); 
    const [motdepasse, definirMotDePasse] = useState('');

    const seconnecter = () => {
      fetch('http://192.168.43.42:80/mini_chat/API_REST/compte_utilisateur/authentification.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              adresse_email: email, 
              mot_de_passe: motdepasse
          })
      })
      .then(response => response.json())
      .then(data => {
          if(data.motdepassecorrect == "true") {
            // Si le mot de passe est correcte => redirection vers l'ecran acc : 
            navigation.navigate('Home', data)
          } else {
            Alert.alert('Votre mot de passe est incorecte'); 
          }
      })
      .catch(error => {
          console.error('Erreur lors de la requette POST', error); 
      })  
  };

    return (
        <ScrollView>
          <View style={styles.container}>
            <AppHead />

              <View>
                {/* Adresse email : */}
                <Text style={styles.labelInput}>Adresse email : </Text>
                <TextInput
                    placeholder='Email *'
                    style={styles.input}
                    onChangeText={(val) => definirEmail(val)}
                />
            
                {/* Mot de passe : */}
                <Text style={styles.labelInput}>Mot de passe : </Text>
                  <TextInput
                      placeholder='Mot de passe *'
                      style={styles.input}
                      onChangeText={(val) => definirMotDePasse(val)}
                      secureTextEntry = {true}
                  />
              </View>      

              {/* Boutton de connexion */}
              <TouchableOpacity 
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => {seconnecter()}} 

                activeOpacity={1}
              >
                <AntDesign name='login' size={24} color="white" />
                <Text style={styles.textButton}>  Se connecter</Text>
              </TouchableOpacity>

              {/* Boutton Mot de passe oublié */}
              <TouchableOpacity 
                style={[styles.buttonContainer, styles.forgotButton]}
                activeOpacity={1}
              >
                <MaterialCommunityIcons name="account-question" size={24} color="white" />
                <Text style={styles.textButton}>  Mot de passe oublié</Text>
              </TouchableOpacity>

              {/* Boutton création d'un compte */}
              <TouchableOpacity
                style={[styles.buttonContainer, styles.createButton]}
                onPress={() => navigation.navigate('SignInInterface')}
                activeOpacity={1}
              >
                <MaterialCommunityIcons name="account-plus" size={24} color="white" />
                <Text style={styles.textButton}>  Créer un compte</Text>
              </TouchableOpacity>

            <LoginImage />
            <StatusBar style='auto'/>
          </View>
        </ScrollView>   
      )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF'
    },

    loginButton: {
      backgroundColor: '#00b300'
    }, 

    forgotButton: {
      backgroundColor: '#b30000'
    },

    createButton: {
      backgroundColor: '#0077b3'
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

    input: {
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      margin: 10, 
      padding: 10,
      borderRadius: 5,
      fontSize: 18
    }, 

    labelInput: {
      position: 'relative', 
      left: 10,
      fontSize: 20
   },
});  