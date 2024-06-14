import React from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';
import { ButtonNavigate } from '../components/ButtonNavigate';
import { Inter_Medium } from '../../../assets/fonts/fonts';

const icon_email = '../../../assets/icons/email.svg';
const icon_password = '../../../assets/icons/password.svg';
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
            <View>
                <View style={styles.inputcontainer}>
                    <TextInput 
                        placeholder="Digite aqui seu e-mail" 
                        inputMode="text" 
                        style={styles.input}
                        leftIcon={
                            <Image style={styles.icon} source={require(icon_email)}/>
                        }
                    />
                </View>
                <View style={styles.inputcontainer}>
                    <Image style={styles.icon} source={require(icon_password)}/>
                    <TextInput 
                        placeholder="Digite aqui sua senha" 
                        inputMode="text"
                        secureTextEntry={true}
                        style={styles.input}
                    />
                </View>
                <View style={styles.viewCenter}>
                    <ButtonNavigate style={styles.input} page="HomeProfissional" textButton="Entrar" />

                    <Text>Não possui cadastro?</Text>
                    <ButtonNavigate style={styles.input} page="CadastroCliente" textButton="Cadastro" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewCenter: {
        alignItems: "center",
    },
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
    inputcontainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    icon: {
        marginRight: 10,
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
    },
});

export { InitialScreen };
