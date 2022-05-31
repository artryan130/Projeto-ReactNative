import React from "react";
import {Text, View, StyleSheet, Image, Fragment } from "react-native"; 
import { Button } from 'react-native-elements';

export function NewView({ route, navigation }){



    return (
        <View style={style.gen}>
             <View style={style.box}>
             {/* <Button style={style.button1}>
                Voltar
            </Button>  */}
             <Text style={style.title}>
                Nova Atividade
            </Text>
            <Text style={style.subtitle}>
                Preencha os <Text style={{color: '#23C7D7'}}>filtros</Text> para sugerirmos uma <Text style={{color: '#23C7D7'}}>nova atividade</Text>
            </Text>
            <View style={style.cardBox}>
                <Text style={style.cards}>Tipo de atividade</Text>
                <Text style={style.cards}>Quantidade de Participantes</Text>
                <Text style={style.cards}>Data Planejada</Text>
            </View>
            {/* <Button 
            style={style.button2} 
            onPress={() => navigation.navigate('', {})}
            >
                Continuar
            </Button>   */}
            </View> 
        </View>
    )
}

const style = StyleSheet.create({
    gen:{
        backgroundColor: '#23C7D74A',
        margin: 0,
        flex: 1
    },
    box: {
        backgroundColor: '#FFFFFF',
        marginTop: 11,
        marginLeft: 13,
        marginRight: 12,
        marginBottom: 8,
        borderRadius: 10,
        flex: 1,
    },
    title: {
        alignSelf: "center",
        fontSize: 25,
        marginBottom: 25,
        textDecorationLine: "underline",
        textDecorationColor: "#23C7D7", 
    },
    subtitle: {
        fontSize: 16,
        alignSelf: "center",
        marginLeft: 17,
        marginRight: 17,
        textAlign: "center",
        marginBottom: 26,
    },
    cardBox: {
        height: 329,
        width: 355,
        borderRadius: 10,
        backgroundColor: '#23C7D7',
        marginTop: 0,
        marginBottom: 97,
        marginLeft: 12,
        marginRight: 12,
        alignItems: "center",
        alignSelf: "center",
    },
    cards: {
        width: 288,
        height: 51,
        marginBottom: 0,
        marginTop: 40,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        textAlign: "left",
        fontSize: 16,
        textAlignVertical: "center",
        paddingLeft: 33,
        //weight???
    },
    button1: {
        width: 70,
        height: 10,
        backgroundColor: 'FFFFFF',
        flex: 1,

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
