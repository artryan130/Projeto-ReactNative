import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput } from "react-native"; 
import { Button, Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';

export function NewView({ route, navigation }){

    const [type, setType] = useState('')
    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')

    return (
        <View style={style.gen}>
             <View style={style.box}>
              <Text style={style.voltar}>
                Voltar
            </Text>  
            <AntDesign name ="right" size={24} color="black" style={style.arrow0}/>
             <Text style={style.title}>
                Nova Atividade
            </Text>
            <Text style={style.subtitle}>
                Preencha os <Text style={{color: '#23C7D7'}}>filtros</Text> para sugerirmos uma <Text style={{color: '#23C7D7'}}>nova atividade</Text>
            </Text>
            <View style={style.cardBox}>

                <View style={style.cards}>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Tipo de atividade',
                            value: null,
                        }}
                        style={style.label}
                        onValueChange={(type) => setType(type)}
                        items={[
                            { label: 'Educacional', value: 'education' },
                            { label: 'Recriação', value: 'recreational' },
                            { label: 'Social', value: 'social' },
                            { label: 'DIY(Faça voce mesmo)', value: 'diy' },
                            { label: 'Caridade', value: 'charity' },
                            { label: 'Culinária', value: 'cooking' },
                            { label: 'Relaxamento', value: 'relaxation' },
                            { label: 'Música', value: 'music' },
                            { label: 'Trabalho', value: 'busywork' },
                        ]}
                    />
                </View>
                {/* <AntDesign name ="right" size={24} color="black" style={style.arrow1}/> */}
                <TextInput
                    onChangeText={number => setNumber(number)} 
                    placeholder="Quantidade de Participantes"
                    value={number}
                    style={style.cards}
                />
                {/* <AntDesign name ="right" size={24} color="black" style={style.arrow2} /> */}
                <TextInput
                    onChangeText={date => setDate(date)} 
                    placeholder="Data Planejada"
                    value={date}
                    style={style.cards}
                />
                {/* <AntDesign name ="right" size={24} color="black" style={style.arrow3} /> */}
            </View>
            <Button
                buttonStyle={{
                    width: 230,
                    height: 50,
                    borderRadius: 15,
                    backgroundColor: '#23C7D7',
                }}
                title="Continuar"
                onPress={() => navigation.navigate("SuggestedView")}
            />
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
        paddingLeft: 20,
        //weight???
    },
    arrow0: {
        position: "absolute",
        width: '100%',
        height: '100%',
        marginRight: "30%",
        marginTop: 1,
    },
    arrow1: {
        position: "absolute",
        width: '100%',
        height: '100%',
        marginRight: "45%",
        marginTop: 54,
    },
    arrow2: {
        position: "absolute",
        width: '100%',
        height: '100%',
        marginRight: "45%",
        marginTop: 145,
    },
    arrow3: {
        position: "absolute",
        width: '100%',
        height: '100%',
        marginRight: "45%",
        marginTop: 235,
        borderWidth: 1,
        borderColor: 'black'
    },
    voltar: {
        fontSize: 16,
        justifyContent: "flex-start",
        marginLeft: 0,
    },
    button2: {
        height: 41,
        width: 203,
        borderRadius: 10,
        backgroundColor: '#23C7D7',
    },
    select: {
        marginTop: 200,
    },
    b1: {

    },
    b2: {

    }
})
