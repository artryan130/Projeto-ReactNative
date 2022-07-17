import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput, Image } from "react-native"; 
import { Button } from 'react-native-elements';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { ButtonBack } from "../components/ButtonBack";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: {
          
          "diy": "Faça você mesmo",
          "education": "Educacional",
          "recreational": "Recreacional",
          "social": "Social",
          "charity": "Caridade",
          "cooking": "Culinária",
          "relaxation": "Relaxamento",
          "music": "Música",
          "busywork": "Trabalho",

          "Make a scrapbook with pictures of your favorite memories": "Faça um álbum de recortes com fotos de suas memórias favoritas",
          "Resolve a problema you've been putting off": "Resolva um problema que você está adiando",
          "Learn how to whistle with your fingers": "Aprenda a assobiar com os dedos",
          "Read a formal research paper on an interesting subject": "Leia um artigo de pesquisa formal sobre um assunto interessante",
          "Learn how to make a website": "Aprenda a fazer um site",
          "Learn the NATO phonetic alphabet": "Aprenda o alfabeto fonético da OTAN",
          "Learn how to use an Arduino": "Aprenda a usar um Arduino",
          "Learn how the internet works": "Aprenda como a internet funciona"
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export function ViewActivity({ route, navigation, subtela }) {
    
    const {dados} = route.params;
    let arrAtividades = [];

    const { t } = useTranslation();

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



                // arrAtividades.splice(id-1, 1);
                // storeData(arrAtividades)
                navigation.navigate('Atividades Planejadas');
            }
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
            <View style = {style.topButtons}>
                <ButtonBack navigation={navigation}/>
             </View>
                <Text style={style.text1}>
                    Atividades Planejadas
                </Text>
                <Text style={style.text2}>
                    Confira <Text style={style.text3}>mais informações</Text> das suas <Text style={style.text3}>atividades planjeadas</Text>
                </Text>
                <View style={style.card}>
                    <Text style={style.text7}>Card Atividade{dados.id}</Text>
                    <Text style={style.text5}>{dados.date}</Text>
                    <Text style={style.text5}><Text style={style.text4}>Nome:</Text>{t(dados.activity)}</Text>
                    <Text style={style.text5}><Text style={style.text4}>Tipo de atividade:</Text>{t(dados.type)}</Text>
                    <Text style={style.text5}><Text style={style.text4}>Acessibilidade <Text style={style.text6}>(dificuldade para realizar a atividade de 0 até 1):</Text></Text>{t(dados.accessibility)}</Text>
                    <Text style={style.text5}><Text style={style.text4}>Preço:</Text>{t(dados.price)}</Text>
                    <Text style={style.text5}><Text style={style.text4}>Participantes:</Text>{t(dados.participants)}</Text>
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