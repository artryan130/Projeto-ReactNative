import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput, Image } from "react-native"; 
import { Button } from 'react-native-elements';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export function ViewActivity({ route, navigation, subtela }) {
    
    const {dados} = route.params;
    let arrAtividades = [];

    const getActivity = async() => {
        try{
          const jsonValue = await AsyncStorage.getItem('Atividades')
          if(jsonValue != null){
            arrAtividades = JSON.parse(jsonValue);
          }else{
            console.log('sem dados na lista');
            return null;
          }
        }catch(e){
            console.log(e);
        }
      }

      useFocusEffect(
        React.useCallback(() => {
            getActivity();
        }, [])
    );


    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('Atividades', jsonValue)
        } catch (e) {
          // saving error
        }
    }

    const storeHistorico = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('Historico', jsonValue)
        } catch (e) {
          // saving error
        }
    }


    const remove_activity = async(id) => {
        try{
            const jsonValue = await AsyncStorage.getItem('Atividades')
            const arrAtividades = JSON.parse(jsonValue);
            arrAtividades.splice(id-1, 1);
            storeData(arrAtividades)
            navigation.navigate('Atividades Planejadas');
        }
        
        catch(e){
            console.log('erro ao excluir');
            console.log(e);
        }
    }

    const concluir_activity = async() => {
        let index = 0;
        let atividade = {};
        for(let i = 0; i < arrAtividades.length; i++){
            if(dados.activity == arrAtividades[i].activity){
                atividade = arrAtividades[i]; 
                break;
            }
            index++;
        }
        if(index > -1){
            arrAtividades.splice(index, 1);
            storeData(arrAtividades);
            armazenarHistorico(atividade);
        }
    }

    const armazenarHistorico = async(atividade) => {
        try{
          const jsonValue = await AsyncStorage.getItem('Historico')
          if(jsonValue != null && JSON.parse(jsonValue).length > 0){
            const arrAtividadesHistorico = JSON.parse(jsonValue);
            arrAtividadesHistorico.push(atividade);
            storeHistorico(arrAtividadesHistorico);
          }else{
            const arrAtividadesHistorico = [];
            arrAtividadesHistorico.push(atividade);
            storeHistorico(arrAtividadesHistorico);
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
                <Text style={style.text1}>
                    Atividades Planejadas
                </Text>
                <Text style={style.text2}>
                    Confira <Text style={style.text3}>mais informações</Text> das suas <Text style={style.text3}>atividades planjeadas</Text>
                </Text>
                <View style={style.card}>
                    <Text style={style.text7}>Card Atividade{dados.id}</Text>
                    <Text style={style.text5}>{dados.date}</Text>
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
                        onPress={() => remove_activity(dados.id)}
                    />
                    <Button
                        buttonStyle={{
                            width: 230,
                            height: 50,
                            borderRadius: 15,
                            backgroundColor: '#23C7D7',
                        }}
                        title="Concluir atividade"
                        onPress={concluir_activity}
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