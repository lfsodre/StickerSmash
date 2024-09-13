import React from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1679057001914-59ab4131dfff?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Troque pela URL da sua imagem ou use require para um arquivo local
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>AVIATION BLOG</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>USER:</Text>
          <TextInput
            style={styles.input}
            placeholder="ex: luis.sodre"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>PASSWORD:</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="#999"
            secureTextEntry
          />
          <Button title="Entrar" onPress={() => {}} />
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
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Efeito glass
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