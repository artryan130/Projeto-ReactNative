import React from "react";
import {Text, View, StyleSheet, Image, Button } from "react-native"; 

export default props => {
    return (
        <View style={style.welcome}>
            <Text style={style.title}>Bem vindo ao iResenha</Text>
            <Image
            style={style.image}
            source={require('../../assets/image7.png')}
            />
            <Text style={style.text}>O melhor lugar para encontrar e gerenciar atividades !</Text>
            <Button
            style={style.button} 
            title="Iniciar"
            />
        </View>
        
    )
}

const style = StyleSheet.create({
    welcome: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textDecorationLine: "underline",
        textDecorationColor: '#23C7D7',
        marginTop: 30
    },
    image: {
        marginTop: 100,
        marginBottom: 50,
    },
    text: {
        marginBottom: 30,
        fontSize: 20,
        textAlign: "center"
    },
    button: {
    }






})