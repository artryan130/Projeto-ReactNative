import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput } from "react-native"; 
import { Button, Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

export function PlannedView({ route, navigation }){

    const [type, setType] = useState('')
    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')

    return (
        <View style={style.gen}>
             <View style={style.box}>
             {/* <Button style={style.button1}>
                Voltar
            </Button>  */}
             <Text style={style.title}>
                Atividades Planejadas
            </Text>
            <Text style={style.subtitle}>
                Confira os <Text style={{color: '#23C7D7'}}>cards</Text> com informações das suas <Text style={{color: '#23C7D7'}}>atividades planejadas</Text>
            </Text>
            <View style={style.ativ}>
                <Text style={style.text}>Card Atividade 1</Text>
                <Text style={style.data}>00/00/0000</Text>
            </View>
            <View style={style.ativ}>
                <Text style={style.text}>Card Atividade 2</Text>
                <Text style={style.data}>00/00/0000</Text>
            </View>
            <View style={style.ativ}>
                <Text style={style.text}>Card Atividade 3</Text>
                <Text style={style.data}>00/00/0000</Text>
            </View>
  
            <Text style={style.footer}>
                Clique em algum card para mais informações
            </Text>
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
        marginTop: 24,
        marginLeft: 13,
        marginRight: 12,
        marginBottom: 8,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center'
    },
    title: {
        alignSelf: "center",
        fontSize: 25,
        marginBottom: 30,
        textDecorationLine: "underline",
        textDecorationColor: "#23C7D7", 
    },
    subtitle: {
        fontSize: 16,
        alignSelf: "center",
        marginLeft: 17,
        marginRight: 17,
        textAlign: "center",
        marginBottom: 0,
    },
    ativ: {
        borderRadius: 10,
        height: 86,
        width: 306,
        marginTop: 50,
        marginBottom: 0,
        borderColor: '#23C7D7',
        borderWidth: 1,
        borderSytle: 'solid',
    },
    text: {
        //alignItems: "flex-start",
        //weight: 500
        fontSize: 25,
        marginTop: 5,
        marginLeft: 14,
        marginBottom: 7,
    },
    data: {
        fontSize: 16,
        marginLeft: 14
    },
    footer:{
        marginBottom: 0,
        marginTop: 40,
        fontSize: 14,
        marginRight: 44,
        marginLeft: 44,
        textAlign: "center",
    },
    button1: {
        width: 70,
        height: 10,
        backgroundColor: 'FFFFFF',
        flex: 1,

    },
    select: {
        marginTop: 200,
    }
})