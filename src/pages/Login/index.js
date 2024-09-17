import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Login({navigation}) {
    return (
        <View style={styles.background}>
          <View style={styles.overlay}>
            <Text style={styles.title}>AVIATION BLOG</Text>
            <View style={styles.inputContainer}>
            <Text style={styles.label}>USER:</Text>
            <TextInput
                style={styles.input}
                placeholder="ex: luis.sodre"
                placeholderTextColor="#999"
                required
            />
            <Text style={styles.label}>PASSWORD:</Text>
            <TextInput
                style={styles.input}
                placeholder="password"
                placeholderTextColor="#999"
                secureTextEntry
            />
            {/*Inclua o endereço destino ao clicar no Botão*/}
            <Button
              title="Entrar"
              onPress={ () => navigation.navigate('Home')}  
            />
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
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginBottom: 20,
    },
    inputContainer: {
      width: 300,
    },
    label: {
      color: '#fff',
      marginBottom: 5,
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      padding: 10,
      marginBottom: 15,
      borderRadius: 5,
      color: '#fff',
    },
  });