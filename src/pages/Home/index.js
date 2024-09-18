import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={styles.background}>
          <View style={styles.overlay}>
            <Text style={styles.label}> Home </Text>

            {/* BUTTON - CARDS */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('User')}>
                <Text style={styles.buttonText}> USER </Text>
            </TouchableOpacity>

            {/* BUTTON - BACK */}
            <TouchableOpacity
              style={[styles.button, styles.exitButton]}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}> SAIR </Text>
            </TouchableOpacity>
          </View>


          <View style={styles.overlay}>
            <Text style={styles.label}> POST2 </Text>
          </View>

          {/* FOOTER */}
          <View style={styles.footer}>
                <Text style={styles.footerText}>Footer - Direitos Reservados</Text>
          </View>

        </View>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#292929',
    justifyContent: 'space-between', // Ajusta a distribuição dos elementos para permitir o footer
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
  },
  label: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  exitButton: {
    backgroundColor: '#FF6347',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    backgroundColor: '#333333',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
  },
});