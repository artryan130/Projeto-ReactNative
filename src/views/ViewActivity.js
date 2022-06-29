import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput, Image } from "react-native"; 
import { Button } from 'react-native-elements';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export function ViewActivity({ route, navigation }) {
    
    const {dados} = route.params;
    
    return (
        <View style={style.content}>
            <View style={style.pag}>
                <Text style={style.text1}>
                    Atividades Planejadas
                </Text>
                <Text style={style.text2}>
                    Confira <Text style={style.text3}>mais informações</Text> das suas <Text style={style.text3}>atividades planjeadas</Text>
                </Text>
                <View style={style.card}>
                    <Text style={style.text7}>Card Atividade{dados.id}</Text>
                    <Text style={style.text5}><Text style={style.text4}>Nome:</Text>{dados.activity}</Text>
                    <Text style={style.text5}><Text style={style.text4}>Tipo de atividade:</Text>{dados.type}</Text>
                    <Text style={style.text5}><Text style={style.text4}>Acessibilidade <Text style={style.text6}>(dificuldade para realizar a atividade de 0 até 1):</Text></Text>{dados.accessibility}</Text>
                    <Text style={style.text5}><Text style={style.text4}>Preço:</Text>{dados.price}</Text>
                    <Text style={style.text5}><Text style={style.text4}>Participantes:</Text>{dados.participants}</Text>
                </View>
                <Button
                        buttonStyle={{
                            width: 230,
                            height: 50,
                            borderRadius: 15,
                            backgroundColor: 'white',
                            marginBottom: 16,
                            borderColor: '#23C7D7',
                            borderWidth: 1
                        }}
                        titleStyle={{
                            color:'#23C7D7'
                        }}
                        type= 'outline'
                        title="Excluir atividade"
                        // onPress={() => navigation.navigate("Nova Atividade")}
                    />
                    <Button
                        buttonStyle={{
                            width: 230,
                            height: 50,
                            borderRadius: 15,
                            backgroundColor: '#23C7D7',
                        }}
                        title="Concluir atividade"
                        // onPress={()=> navigation.navigate("Atividades Planejadas")}
                    />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    content: {
        backgroundColor: '#23C7D74A',
        margin: 0,
        flex: 1
    },  
    pag: {
        backgroundColor: '#FFFFFF',
        marginTop: RFValue(28),
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginLeft: RFValue(20),
        marginRight: RFValue(20),
        marginBottom: RFValue(20),
        borderRadius: 10,
        flex: 1,
    },
    text1: {
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
    text2: {
        fontSize: RFValue(14),
        // fontFamily: 'Poppins-Medium',
        marginTop: RFValue(10),
        textAlign: "center",
        padding: 10,
    },
    text3: {
        color: '#23C7D7'
    },
    text4: {
        fontWeight: 'bold',
    },
    text5: {
        padding: 5
    },
    text6: {
        fontWeight: 'normal'
    },
    text7: {
        fontWeight: "500",
        fontSize: RFValue(25),
    },
    card: {
        padding: 20,
        borderColor: '#23C7D7',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 30,
        marginTop: 20
    },
})