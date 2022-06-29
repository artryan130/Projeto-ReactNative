import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput } from "react-native"; 
import { Button, Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export function NewView({ route, navigation }){

    const [type, setType] = useState('')

    const [participants, setParticipants] = useState('')
    const [date, setDate] = useState('')

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
                <View style={style.cards}>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Tipo de atividade',
                            value: null,
                        }}
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
                
                <TextInput
                    onChangeText={participants => setParticipants(participants)} 
                    placeholder="Quantidade de Participantes"
                    value={participants}
                    style={style.cards}
                />
                <TextInput
                    onChangeText={date => setDate(date)} 
                    placeholder="Data Planejada"
                    value={date}
                    style={style.cards}
                />
            </View>
            <Button
                buttonStyle={{
                    width: 230,
                    height: 50,
                    borderRadius: 15,
                    backgroundColor: '#23C7D7',
                }}
                title="Continuar"
                onPress={() => navigation.navigate("SuggestedView", {
                    paramKey: {type, participants,date}
                })}
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
        marginTop: RFValue(28),
        marginLeft: RFValue(20),
        marginRight: RFValue(20),
        marginBottom: RFValue(20),
        borderRadius: 10,
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        // fontFamily: 'Poppins-Medium',
        fontWeight: 'bold',
        marginTop: RFValue(10),
        marginBottom: RFValue(20),
        borderBottomColor: '#2896D3',
        borderBottomWidth: RFValue(5),
        borderBottomLeftRadius: 2.5,
        borderBottomRightRadius: 2.5
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
    select: {
        marginTop: 200,
    },
    b1: {

    },
    b2: {

    }
})