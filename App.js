import React from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1679065236532-09c4a500a025?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
      style={styles.background}
    >
      {/*Other options:
      DISCORD - https://images.unsplash.com/photo-1679057001914-59ab4131dfff?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
      TWITTER - https://images.unsplash.com/photo-1679061399645-f2d8eccd7328?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
      YOUTUBE - https://images.unsplash.com/photo-1679094837433-32484a621c74?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
      TWITCH  - https://images.unsplash.com/photo-1679065236532-09c4a500a025?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
      */}
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
          <Button title="Entrar" onPress={() => {}}/>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
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

export default LoginScreen;