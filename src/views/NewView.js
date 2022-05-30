import React from "react";
import {Text, View, StyleSheet, Image } from "react-native"; 
import { Button } from 'react-native-elements';

export function NewView({ route, navigation }){



    return (
        <View style={style.gen}>
            <View style={style.box}>
            <Button>
                Voltar
            </Button>
            <Text>
                Nova Atividade
            </Text>
            <Text>
                Preencha os filtros para sugerirmos uma nova atividade
            </Text>
            <View style={style.cardBox}>
                <View style={style.cards}>Tipo de atividade</View>
                <View style={style.cards}>Quantidade de Participantes</View>
                <View style={style.cards}>Data Planejada</View>
            </View>
            <Button 
            style={style.button2} 
            onPress={() => navigation.navigate('', {})}
            >
                Continuar
            </Button>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    gen:{
        backgroundColor: '#23C7D74A',
        margin: 0
    },
    box: {
        backgroundColor: '#FFFFFF',
        marginTop: 11,
        marginLeft: 13,
        marginRight: 12,
        marginBottom: 8,
        borderRadius: 10
    },
    cardBox: {
        height: 329,
        width: 323,
        borderRadius: 10,
        backgroundColor: '#23C7D7',
        marginTop: 164,
        marginBottom: 97,
        marginLeft: 12,
        marginRight: 12
    },
    cards: {
        width: 288,
        height: 51,
        marginBottom: 42,
        marginTop: 42,
        borderRadius: 10,
        backgroundColor: '#FFFFFF'
    },
    button2: {
        height: 41,
        width: 203,
        borderRadius: 10,
        backgroundColor: '#23C7D7'
    },
    b1: {

    },
    b2: {

    }
})