import React from 'react';
import { View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonNavigate } from '../components/ButtonNavigate';
import { Inter_Medium } from '../../../assets/fonts/fonts';

export function ActionModal({ handleClose }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={handleClose}></TouchableOpacity>

            <View style={styles.content}>
                <ButtonNavigate style={styles.navigationButton} page="CadastroCliente" textButton="Cadastro" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    navigateButton: {
        backgroundColor: '#2DC7E4',
        borderRadius: 6,
        marginTop: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0, 0.2)',
        elevation: 5,
        shadowOpacity: 0.28,
        shadowRadius: 4,
        textAlign: 'center',
        fontFamily: Inter_Medium,
    },
});
