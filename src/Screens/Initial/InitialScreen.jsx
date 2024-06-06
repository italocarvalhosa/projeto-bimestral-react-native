import React from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';
import { ButtonNavigate } from '../components/ButtonNavigate';

const logo = '../../../assets/img/logo-sem-nome.png';

const InitialScreen = () => {


    return (
        <View style={styles.container}>

            <View style={styles.imageDiv}>
                <Image
                    source={require(logo)}
                    style={styles.logo}
                />
            </View>
                <Text>E-mail</Text>
                <TextInput 
                    placeholder="Digite aqui seu e-mail" 
                    inputMode="text" 
                    style={styles.input}
                />

                <Text>Senha</Text>
                <TextInput 
                    placeholder="Digite aqui sua senha" 
                    inputMode="text"
                    style={styles.input}
                />
                <ButtonNavigate page="HomeProfissional" textButton="Home" />
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
        width: 150,
        height: 40,
        backgroundColor: '#89CEFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export { InitialScreen };