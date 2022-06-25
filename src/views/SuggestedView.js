import React from "react";
import {Text, View, StyleSheet } from "react-native"; 
import { Button } from 'react-native-elements';
import { getDados } from "../utils/requests/getDados";
import { useEffect, useState } from 'react'
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export function SuggestedView({ route, navigation }) {

    const  dados  = route.params

    const [saverequestData, setSaveRequestData] = useState([{
        activity: '',
        accessibility: '',
        type: '',
        participants: '',
        price: '',
        link: '',
        key: ''
    }])
    const { getItem, setItem } = useAsyncStorage('dados');
    

    const [requestData, setRequestData] = useState({
        activity: '',
        accessibility: '',
        type: '',
        participants: '',
        price: '',
        link: '',
        key: ''
    })

    
    useEffect(() => {
        getDados(dados.paramKey.type, dados.paramKey.participants).then(res => setRequestData(res.data))
    }, [])


    const storeData = async (value) => {
        const jsonValue = JSON.parse(value)
        await setItem(jsonValue);
        setSaveRequestData(jsonValue);
        console.log(saverequestData[0])
    }

    const readItemFromStorage = async () => {
        const jsonValue = await getItem()
        setSaveRequestData(JSON.parse(jsonValue));
    };
     
    return (
        
        <View style={style.content}>
            <View style={style.pag}>
                    <Text style={style.text1}>Atividade Sugerida</Text>
                    <Text style={style.text2}>Veja os detalhes da <Text style={style.text3}>atividade sugerida</Text> e escolha se ela será executada</Text>
                    <View style={style.card}>
                        <Text style={style.text5}><Text style={style.text4}>Nome:</Text>{requestData.activity}</Text>
                        <Text style={style.text5}><Text style={style.text4}>Tipo:</Text>{requestData.type}</Text>
                        <Text style={style.text5}><Text style={style.text4}>Acessibilidade:</Text>{requestData.accessibility}</Text>
                        <Text style={style.text5}><Text style={style.text4}>Preço:</Text>{requestData.price}</Text>
                        <Text style={style.text5}><Text style={style.text4}>Participantes:</Text>{requestData.participants}</Text>
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
                        title="Descartar"
                        onPress={() => navigation.navigate("Nova Atividade")}
                    />
                    <Button
                        buttonStyle={{
                            width: 230,
                            height: 50,
                            borderRadius: 15,
                            backgroundColor: '#23C7D7',
                        }}
                        title="Adicionar Atividade"
                        onPress={() => {
                            storeData(requestData)
                            readItemFromStorage()
                            navigation.navigate("Atividades Planejadas", {
                                paramKey: saverequestData
                            }
                            )
                        }}
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
        marginTop: 22,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 8,
        borderRadius: 10,
        flex: 1,
    },
    text1: {
        fontSize: 30,
        // fontFamily: 'Poppins-Medium',
        fontWeight: 'bold',
        marginTop: 40,
        textDecorationLine: "underline",
        textDecorationColor: '#23C7D7',
    },
    text2: {
        fontSize: 18,
        // fontFamily: 'Poppins-Medium',
        marginTop: 30,
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