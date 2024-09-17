import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function User({navigation}) {
    return (
        <View style={styles.background}>
            <View style={styles.overlay}>
                <Text style={styles.label}> Home </Text>

                {/* Botão CARDS */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.buttonText}> CARD </Text>
                </TouchableOpacity>

                {/* Botão SAIR */}
                <TouchableOpacity
                    style={[styles.button, styles.exitButton]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}> SAIR </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      backgroundColor: '#292929',
    },
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // GLASS EFFECT
      padding: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.3)',
      alignItems: 'center', // Centraliza os elementos dentro do overlay
    },
    label: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#1E90FF', // Azul padrão para o botão "CARDS"
      paddingVertical: 15, // Altura do botão
      paddingHorizontal: 50, // Largura do botão
      borderRadius: 5,
      marginBottom: 15,
      width: '100%', // Faz o botão ocupar a largura do pai
      alignItems: 'center',
    },
    exitButton: {
      backgroundColor: '#FF6347', // Cor vermelha para o botão "SAIR"
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
});