import React from "react";
import {Text, View, StyleSheet, Image, Button } from "react-native"; 

export default props => {
    return (
        <View style={style.welcome}>
            <Text>Bem vindo ao iResenha</Text>
            <Image
            source={require('../../assets/image7.png')}
            />
            <Text>O melhor lugar para encontrar e gerenciar atividades !</Text>
            <Button 
            title="Iniciar"
            />
        </View>
        
    )
}

const style = StyleSheet.create({



})