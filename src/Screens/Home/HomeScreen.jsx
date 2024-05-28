import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { HomeText } from './HomeText';
import { ButtonNavigate } from '../components/ButtonNavigate';
const logo = '../../../assets/img/logo-sem-nome.png';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require(logo)}
                style={styles.logo}
            />
            <HomeText/>
            <ButtonNavigate page="SingIn" textButton="SingIn"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    logo: {
        width: 400,
        height: 350
    },
    botao: {
        width: 150,
        height: 40,
        backgroundColor: '#89CEFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoText: {
        color: '#FFF'
    }
});