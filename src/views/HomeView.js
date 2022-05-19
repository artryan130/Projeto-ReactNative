import React from "react";
import {Text, View, StyleSheet } from "react-native"; 
import { SingleCard } from "../components/SingleCard";

export function HomeView({route}) {
    
    const itens = [
        {
            title: (<Text>Atividades Planejadas</Text>),
            subtitle: (<Text>Confira suas atividades planejadas</Text>)
        },
        {
            title: (<Text>Nova Atividade</Text>),
            subtitle: (<Text>Criar uma nova atividade</Text>)
        },
        {
            title: (<Text>Histórico de atividades</Text>),
            subtitle: (<Text>Suas atividades ja concluidas</Text>)
        }
    ]
    
    const generateCards = () => {
        return itens.map((e, index) => SingleCard(e, index))
    }
    
    return (
        <View style={style.home}>
            <Text style={style.text}>Olá {route.params.paramKey}</Text>
            <Text style={style.text2}>Escolha alguma das opções do menu abaixo para começar a utilizar o aplicativo</Text>
            <View style={style.cards}>{generateCards()}</View>
        </View>
    )
}

const style = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
    },
    text: {
        fontSize: 25,
        // fontFamily: 'Poppins-Medium',
        fontWeight: 'bold',
        marginTop: 30
    },
    text2: {
        fontSize: 21,
        // fontFamily: 'Poppins-Medium',
        marginTop: 30,
        textAlign: "center",
        padding: 10,
    },
    cards: {
        display: 'flex',
        flexDirection: 'column',
        // flex: 1,
        fontSize: 10,
        padding: 10
    }
})