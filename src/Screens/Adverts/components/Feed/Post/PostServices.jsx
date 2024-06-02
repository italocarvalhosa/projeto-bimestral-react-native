import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Inter_Medium, Inter_Light } from '../../../../../../assets/fonts/fonts';

const styles = StyleSheet.create({
    postServices: {
        marginTop: 30,
        width: '100%'
    },
    postTitleServices: {
        fontFamily: Inter_Medium,
        fontSize: 22
    },
    postTextServices: {
        fontFamily: Inter_Light,
        fontSize: 16
    }
});

export const PostServices = () => {
    return (
        <View style={styles.postServices}>
            <Text style={styles.postTitleServices}>Serviços que serão realizados</Text>
            <Text style={styles.postTextServices}>Curativo, Tratamento de feridas, Vacinas e Troca de Fralda</Text>
        </View>
    );
};