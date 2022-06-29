import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native"; 
import { RFValue } from "react-native-responsive-fontsize";



const Card = ({text, dados, data, subtela, navigation}) => {
   
    return(
        <View>
            <TouchableOpacity 
                    onPress={() => navigation.navigate(subtela, {dados})}
                    style={styles.buttonStyle}>
                    <Text style={styles.textButtonStyle}>{text}</Text>
                    <Text style={styles.dateButtonStyle}>{data}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Card;


const styles = StyleSheet.create({
    buttonStyle:{
        width:306,
        height:86,
        justifyContent: 'center',
        padding:10,
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: RFValue(15),
        marginTop: RFValue(15),
        borderColor: '#23C7D7',
        borderWidth: 1
    },
    textButtonStyle:{
        textAlign:"left",
        marginTop: 5,
        marginBottom:7,
        marginLeft: 14,
        fontSize: RFValue(23),
        fontWeight: 'bold',
        color: '#050505',
        
    },
    dateButtonStyle:{
        textAlign: "left",
        color:"#050505",
        marginBottom:12,
        marginTop: 7,
        marginLeft:14,
        fontSize: RFValue(14)
    }
});