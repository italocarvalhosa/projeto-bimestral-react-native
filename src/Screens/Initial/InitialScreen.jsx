import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, Button } from 'react-native';
import { ButtonNavigate } from '../components/ButtonNavigate';
import { Inter_Medium, Inter_Regular } from '../../../assets/fonts/fonts';


const logo = '../../../assets/img/logo-sem-nome.png';

const InitialScreen = () => {


    return (
        <View style={styles.container}>

            <View style={styles.imageDiv}>
                <Image
                    source={require(logo)}
                    style={styles.logo}
                />
                <Text style={styles.title}>FoundCare</Text>
            </View>
                    <TextInput 
                        placeholder="Digite aqui seu e-mail" 
                        inputMode="text" 
                        style={styles.input}
                    />
                    <TextInput 
                        placeholder="Digite aqui sua senha" 
                        inputMode="text"
                        style={styles.input}
                    />
                    <ButtonNavigate page="HomeProfissional" textButton="Entrar" />

                    <Text>Não possui cadastro?</Text>
                    <ButtonNavigate style={styles.input} page="HomeProfissional" textButton="Cadastro" />
                
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
    input: {
        width: 215,
        height: 36,
        backgroundColor: '#2DC7E4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        textAlign: 'center',
        color: 'white',
        marginVertical: 10,
        fontFamily: Inter_Medium,
        fontSize: 13
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#2DC7E4',
        fontSize: 32,
        fontFamily: Inter_Medium

    }

});

export { InitialScreen };