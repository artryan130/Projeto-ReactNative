import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Button, Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from "../components/Card";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useFocusEffect } from '@react-navigation/native';

export function PlannedView({ route, navigation }) {

    const [activityList, setActivityList] = useState([]);

    const dados = route.params;

    const getActivity = async() => {
        try{
          const jsonValue = await AsyncStorage.getItem('Atividades')
          if(jsonValue != null){
            console.log('ATIVIDADES PLANEJADAS');
            console.log(JSON.parse(jsonValue));
            setActivityList(JSON.parse(jsonValue));
          }else{
            console.log('sem dados na lista');
            return null;
          }
        }catch(e){
            console.log('erro ao armazenar nome do usuário');
        }
    }
    
    useFocusEffect(
        React.useCallback(() => {
          //Below alert will fire every time when profile screen is focused
          getActivity();
            // apagarLista();
        }, [])
      );


    // useEffect(() => {
    //     getActivity()
    // }, [activityList])

    return (

        <View style={style.content}>
            <View style={style.pag}>
                <Text style={style.text1}>
                    Atividades Planejadas
                </Text>
                <Text style={style.text2}>
                    Confira <Text style={style.text3}>os cards</Text> com mais informações das suas <Text style={style.text3}>atividades planjeadas</Text>
                </Text>

                <View style={style.flat}>
                    <FlatList 
                        data={activityList}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <Card text={`Card Atividade ${item.id}`} dados={item} data={item.date} subtela='ViewActivity' navigation={navigation}/>}
                    />
                </View>
                <Text style={style.text2}>
                   Clique em algum card para mais informações.
                </Text>
            </View>
        </View>
        // <View style={style.gen}>
        //     <View style={style.box}>
        //         <Button
        //             title="Voltar"
        //             onPress={() => navigation.navigate("HomeView", { paramKey: null })}
        //         />
        //         <Text style={style.title}>
        //             Atividades Planejadas
        //         </Text>
        //         <Text style={style.subtitle}>
        //             Confira os <Text style={{ color: '#23C7D7' }}>cards</Text> com informações das suas <Text style={{ color: '#23C7D7' }}>atividades planejadas</Text>
        //         </Text>
        //         <View style={style.ativ}>
        //             <Text style={style.text}>Card Atividade 1</Text>
        //             <Text style={style.data}>00/00/0000</Text>
        //         </View>
        //         <View style={style.ativ}>
        //             <Text style={style.text}>Card Atividade 2</Text>
        //             <Text style={style.data}>00/00/0000</Text>
        //         </View>
        //         <View style={style.ativ}>
        //             <Text style={style.text}>Card Atividade 3</Text>
        //             <Text style={style.data}>00/00/0000</Text>
        //         </View>

        //         <Text style={style.footer}>
        //             Clique em algum card para mais informações
        //         </Text>
        //     </View>
        // </View>
    )
}

// const style = StyleSheet.create({
//     gen: {
//         backgroundColor: '#23C7D74A',
//         margin: 0,
//         flex: 1
//     },
//     box: {
//         backgroundColor: '#FFFFFF',
//         marginTop: 24,
//         marginLeft: 13,
//         marginRight: 12,
//         marginBottom: 8,
//         borderRadius: 10,
//         flex: 1,
//         alignItems: 'center'
//     },
//     title: {
//         alignSelf: "center",
//         fontSize: 25,
//         marginBottom: 30,
//         textDecorationLine: "underline",
//         textDecorationColor: "#23C7D7",
//     },
//     subtitle: {
//         fontSize: 16,
//         alignSelf: "center",
//         marginLeft: 17,
//         marginRight: 17,
//         textAlign: "center",
//         marginBottom: 0,
//     },
//     ativ: {
//         borderRadius: 10,
//         height: 86,
//         width: 306,
//         marginTop: 50,
//         marginBottom: 0,
//         borderColor: '#23C7D7',
//         borderWidth: 1,
//         borderSytle: 'solid',
//     },
//     text: {
//         //alignItems: "flex-start",
//         //weight: 500
//         fontSize: 25,
//         marginTop: 5,
//         marginLeft: 14,
//         marginBottom: 7,
//     },
//     data: {
//         fontSize: 16,
//         marginLeft: 14
//     },
//     footer: {
//         marginBottom: 0,
//         marginTop: 40,
//         fontSize: 14,
//         marginRight: 44,
//         marginLeft: 44,
//         textAlign: "center",
//     },
//     button1: {
//         width: 70,
//         height: 10,
//         backgroundColor: 'FFFFFF',
//         flex: 1,

//     },
//     select: {
//         marginTop: 200,
//     }
// })

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