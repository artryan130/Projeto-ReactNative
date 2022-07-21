import React from "react";
import {Text, View, StyleSheet, Alert } from "react-native"; 
import { Button } from 'react-native-elements';
import { getDados } from "../utils/requests/getDados";
import { useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ButtonBack } from "../components/ButtonBack";

export function SuggestedView({ route, navigation }) {

    const  dados  = route.params
    
    const [requestData, setRequestData] = useState({
        activity: '',
        accessibility: '',
        type: '',
        participants: '',
        price: '',
        link: '',
        key: '',
        id: '',
    })

    const [requestDados, setRequestDados] = useState({
        activity: '',
        accessibility: '',
        type: '',
        participants: '',
        price: '',
        link: '',
        key: '',
        id: '',
        date: ''
    })

    
    
    useEffect( () => {
        getDados(dados.paramKey.type, dados.paramKey.participants).then(res => {
            if(res.data.error) {
                Alert.alert("Não encontramos nada :(","Não foi possível encontrar uma atividade desse tipo para essa quantidade de participantes. Por favor, descarte a atividade e tente outra combinação :)");
            }else{
                setRequestData(res.data)
            }
            console.log(res.data)
        })
    }, [])

    // useEffect(() => {
    //     async function fetchMyAPI() {
    //       let response = await getDados(dados.paramKey.type, dados.paramKey.participants)
    //       setRequestData(response)
    //     }
        
    //     fetchMyAPI()
    //   }, [])

      

    useEffect(() => {setRequestDados({...requestData, date: dados.paramKey.date})}, [requestData])

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('Atividades', jsonValue)
        } catch (e) {
          // saving error
        }
      }

    const armazenarAtividade = async() => {
        try{
          const jsonValue = await AsyncStorage.getItem('Atividades')
          if(jsonValue != null && JSON.parse(jsonValue).length > 0){
            const arrAtividades = JSON.parse(jsonValue);
            requestDados.id = arrAtividades[arrAtividades.length - 1].id + 1;
            arrAtividades.push(requestDados);
            storeData(arrAtividades);
          }else{
            const arrAtividades = [];
            requestDados.id = 1;
            arrAtividades.push(requestDados);
            storeData(arrAtividades);
          }
          navigation.navigate('Atividades Planejadas');
        }catch(e){
            console.log('erro ao armazenar');
            console.log(e);
        }
    }
     
    return (
        
        <View style={style.content}>
            <View style={style.pag}>
            <View style = {style.topButtons}>
                <ButtonBack navigation={navigation}/>
             </View>
                    <Text style={style.text1}>Atividade Sugerida</Text>
                    <Text style={style.text2}>Veja os detalhes da <Text style={style.text3}>atividade sugerida</Text> e escolha se ela será executada</Text>
                    <View style={style.card}>
                        <Text style={style.text5}><Text style={style.text4}>Nome:</Text>{requestData.activity}</Text>
                        <Text style={style.text5}><Text style={style.text4}>Tipo de atividade:</Text>{requestData.type}</Text>
                        <Text style={style.text5}><Text style={style.text4}>Acessibilidade <Text style={style.text6}>(dificuldade para realizar a atividade de 0 até 1):</Text></Text>{requestData.accessibility}</Text>
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
                        onPress={armazenarAtividade}
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
        marginLeft: RFValue(20),
        marginRight: RFValue(20),
        marginBottom: RFValue(20),
        borderRadius: 10,
        flex: 1,
    },
    topButtons:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
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