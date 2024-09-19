import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={styles.background}>
          <View style={styles.overlay}>
            <Text style={styles.label}> POST1 </Text>
          </View>

          <View style={styles.interaction}>
            <Image/>
          </View>

          <View style={styles.overlay}>
            <Text style={styles.label}> POST2 </Text>
          </View>

          {/* FOOTER */}
          <View style={styles.footer}>

            {/* BUTTON - CARDS */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('USER PAGE')}>
                <Text style={styles.buttonText}> USER </Text>
            </TouchableOpacity>

            {/* BUTTON - BACK */}
            <TouchableOpacity
              style={[styles.button, styles.exitButton]}
              onPress={() => navigation.navigate('LOGIN PAGE')}>
              <Text style={styles.buttonText}> SAIR </Text>
            </TouchableOpacity>
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
    padding: 10,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 310,
    width: '100%',
    marginBottom: 5,
  },
  label: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: '40%',
    width: '40%',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitButton: {
    backgroundColor: '#FF6347',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    backgroundColor: '#333333',
    height: '10%',
    width:  400,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});