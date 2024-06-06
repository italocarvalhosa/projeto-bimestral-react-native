import React from 'react';
import { View, Button, StyleSheet, Image, } from 'react-native';
import { HomeText } from './HomeText';
import { ButtonNavigate } from '../components/ButtonNavigate';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const logo = '../../../assets/img/logo-sem-nome.png';

export const HomeScreen = () => {


    return (
        <View style={styles.container}>

            <View style={styles.imageDiv}>
                <Image
                    source={require(logo)}
                    style={styles.logo}
                />
            </View>
            <HomeText />
            <ButtonNavigate page="Cadastro" textButton="Cadastrar" />
            <Button style={styles.botao}title="Login" onPress={() => navigation.navigate('InitialScreen')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    imageDiv: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 500,
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