import React from "react";
import {TouchableOpacity, StyleSheet, Text } from "react-native"; 
import { FontAwesome5 } from '@expo/vector-icons'; 

export function ButtonBack({navigation}) {
    return(
        <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={style.buttonStyle}>
                <FontAwesome5 name="less-than" size={24} color="black" style={style.icon}/>
                <Text style={style.textButtonStyle}>Voltar</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    buttonStyle:{
        flexDirection: 'row' ,
        padding: 8 
    },
    icon:{
        position: 'relative',
        top: 1,
        marginRight: 5
    },
    textButtonStyle:{
        textAlign: "center",
        color: "black",
        fontSize: 18,
    }
});