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
                <Text>card 1</Text>
                <Text>Data</Text>
            </View>
            <View style={style.ativ}>
                <Text>card 2</Text>
                <Text>Data</Text>
            </View>
            <View style={style.ativ}>
                <Text>card 3</Text>
                <Text>Data</Text>
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
        marginTop: 11,
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
    ativ: {
        borderColor: 'black',
        borderRadius: 10,
        flex: 1
        
    },
    footer:{
        marginBottom: 0,
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