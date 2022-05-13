import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput } from "react-native"; 
import { Button } from 'react-native-elements';

const [user, setUser] = useState('')

export default ({ navigation }) => {
    return (
        <View>
            <Text>
                Olá! Insira o seu nome para continuarmos.
            </Text>
            <TextInput
                onChangeText={name => setUser({...user, name })} 
                placeholder="Digite o seu nome"
                value={user.name}
            />
            <Button
                buttonStyle={{
                    width: 230,
                    height: 50,
                    borderRadius: 15,
                    backgroundColor: '#23C7D7',
                }}
                title="Continuar"
            />
        </View>
    )
}