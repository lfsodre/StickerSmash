import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}> Home </Text>
            <Button
            style={styles.button}
            tittle="Login"
            onPress={ () => navigation.navigate('Login')}
            />
            <TextInput
                style={styles.input}
                placeholder="ex: luis.sodre"
                placeholderTextColor="#999"
                required
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#292929',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    label: {
        color: '#fff',
    },
    button: {
        margin: 5,
        height: 20,
        width: 20,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        color: '#fff',
      },
})