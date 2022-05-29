import React from "react";
import {Text, View, StyleSheet, Image } from "react-native"; 
import { Button } from 'react-native-elements';

export function WelcomeView({ navigation }) {
    return (
        <View style={style.welcome}>
            <Text style={style.title}>Bem vindo ao iResenha!</Text>
            <Image
            style={style.image}
            source={require('../../assets/image7.png')}
            />
            <Text style={style.text}>O melhor lugar para encontrar e gerenciar atividades !</Text>
            <Button
            buttonStyle={{
                width: 230,
                height: 50,
                borderRadius: 15,
                backgroundColor: '#23C7D7',
            }}
            title="Iniciar"
            onPress={() => navigation.navigate("NameView")}
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
        // fontFamily: 'Poppins-Medium',
        fontWeight: 'bold',
        textDecorationLine: "underline",
        textDecorationColor: '#23C7D7',
        marginTop: 80
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
})