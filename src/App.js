import React from "react";
import { Text, StyleSheet } from "react-native";

export default () => {
    return (
        <Text style={style.App}>Primeiro Componete!</Text>
    )
}

const style = StyleSheet.create({
    App: {
        backgroundColor: 'red',
        fontSize: 24
    }

})