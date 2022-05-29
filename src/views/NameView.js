import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput, Image } from "react-native"; 
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
    await SecureStore.setItemAsync('name', JSON.stringify(value));
}

async function read() {
    const value = await SecureStore.getItemAsync('name');
    return value;
}

export function NameView({ navigation }) {

    const [user, setUser] = useState('')

    return (
        <View style={style.name}>
            <Text style={style.text}>
                Olá! Insira o seu nome para continuarmos
            </Text>
            <View style={style.inputview}>
                <AntDesign name="user" size={24} color="black" style={style.icon} />
                <TextInput
                    onChangeText={name => setUser({...user, name })} 
                    placeholder="Digite o seu nome"
                    value={user.name}
                    style={style.input}
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
                style={style.button}
                onPress={() => {
                    save('name', user)
                    navigation.navigate("HomeView", {
                    paramKey: user.name,
                    })
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    name: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
    },
    text: {
        fontSize: 30,
        // fontFamily: 'Poppins-Medium',
        fontWeight: 'bold',
        marginTop: 30,
        textAlign: 'center'
    },
    input: {
        width: 300,
        height: 50,   
    },
    // image: {
    //     position: "absolute",
    //     marginTop: 340,
    //     left: 70,
    // },
    inputview: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 200,
        marginBottom: 140,
        borderWidth: 1,
        borderColor: '#23C7D7',
        borderRadius: 10,
        paddingLeft: 15
    },

})