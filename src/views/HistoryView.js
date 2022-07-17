import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Button, Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from "../components/Card";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useFocusEffect } from '@react-navigation/native';
import { ButtonBack } from "../components/ButtonBack";

export function HistoryView({ navigation }) {
    
    const [historyList, setHistoryList] = useState([]);
    
    const getActivity = async() => {
        try{
          const jsonValue = await AsyncStorage.getItem('Historico')
          if(jsonValue != null){
            console.log('Historico');
            console.log(JSON.parse(jsonValue));
            setHistoryList(JSON.parse(jsonValue));
          }else{
            console.log('sem dados na lista');
            return null;
          }
        }catch(e){
            console.log('erro ao buscar o historico');
        }
    }

    useFocusEffect(
        React.useCallback(() => {
          //Below alert will fire every time when profile screen is focused
          getActivity();
            // apagarLista();
        }, [])
      );
    
    
    
      return (
        <View style={style.content}>
            <View style={style.pag}>
            <View style = {style.topButtons}>
                <ButtonBack navigation={navigation}/>
             </View>
                <Text style={style.text1}>
                    Historico de Atividades
                </Text>
                <Text style={style.text2}>
                    Confira o <Text style={style.text3}>histórico</Text> das suas <Text style={style.text3}>atividades concluídas</Text>
                </Text>

                <View style={style.flat}>
                    <FlatList 
                        data={historyList}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <Card text={`Card Atividade ${item.id}`} dados={item} data={item.date} subtela='ViewHistoryActivity' navigation={navigation}/>}
                    />
                </View>
                <Text style={style.text2}>
                   Clique em algum card para mais informações.
                </Text>
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
        fontSize: 28,
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
        marginBottom: RFValue(10),
        // fontFamily: 'Poppins-Medium',
        textAlign: "center",
        padding: 10,
    },
    text3: {
        color: '#23C7D7'
    },
    flat: {
        height: RFValue(350),
    }
})