import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function User({navigation}) {
    return (
        <View style={styles.background}>
          
          <View style={styles.User_Name_Overlay}>
            <Text style={styles.User_Text}> USER NAME </Text>
          </View>

          <View style={styles.User_Image_Overlay}>
            <Image 
              style={styles.image}
              source={{ uri: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            />
          </View>

          <View style={styles.User_Bio_Overlay}>
            <Text style={styles.User_Title}> USER BIO </Text>
            <Text style={styles.User_Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac dui bibendum, tempus nulla ut, lacinia nisi. Integer malesuada augue et turpis convallis euismod. Morbi porta urna massa, volutpat dignissim turpis faucibus quis. Sed mollis molestie orci ultrices suscipit. Aenean tempus facilisis mattis. Vestibulum rhoncus pharetra ex a viverra. Morbi diam justo, ultrices sed nisl congue, fringilla eleifend odio. Donec convallis mi quis purus suscipit tincidunt. Proin aliquam elit a rhoncus porta. Maecenas finibus augue velit, laoreet viverra orci scelerisque tincidunt. Vestibulum molestie odio eget lectus scelerisque, a imperdiet ex accumsan. Phasellus nec rhoncus purus.</Text>
          </View>

          {/* FOOTER */}
          <View style={styles.footer}>

            {/* BUTTON - CARDS */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('HOME PAGE')}>
                <Text style={styles.buttonText}> HOME </Text>
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
    alignItems: 'center',
  },
  User_Name_Overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: 5,
    marginHorizontal: 30,
    width:  250,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  User_Image_Overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 5,
    marginHorizontal: 5,
    width:  250,
    height: 250,
    borderRadius: 200,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  User_Bio_Overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width:  400,
    height: 350,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  image: {
    width: '95%',
    height: '95%',
    borderRadius: 200,
  },
  User_Title:{
    color: '#FFF',
    fontSize: 30,
  },
  User_Text:{
    color: '#FFF',
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