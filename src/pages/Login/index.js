import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Login({navigation}) {
    return (
        <View style={styles.background}>
          <View style={styles.overlay}>
            <Text style={styles.title}> AVIATION BLOG </Text>
            <View style={styles.inputContainer}>
            <Text style={styles.label}>USER:</Text>
            <TextInput
                style={styles.input}
                placeholder="ex: luis.sodre"
                placeholderTextColor="#FFF"
                required
            />
            <Text style={styles.label}>PASSWORD:</Text>
            <TextInput
                style={styles.input}
                placeholder="password"
                placeholderTextColor="#FFF"
                secureTextEntry
            />
            <TouchableOpacity 
              style={styles.button}
              onPress={ () => navigation.navigate('HOME PAGE')}>
              <Text style={styles.buttonText}> ENTER </Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      backgroundColor: '#292929'
    },
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // GLASS EFFECT
      padding: 20,
      marginBottom: 50,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      letterSpacing: -4,
    },
    inputContainer: {
      width: 300,
    },
    label: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: 12,
      marginBottom: 5,
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      padding: 10,
      marginBottom: 15,
      borderRadius: 5,
      color: '#fff',
    },
    button: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Azul padrão para o botão "CARDS"
      paddingVertical: 10, // Altura do botão
      paddingHorizontal: 30, // Largura do botão
      borderRadius: 5,
      width: '100%', // Faz o botão ocupar a largura do pai
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#292929',
      letterSpacing: -0.2,
    },
  });