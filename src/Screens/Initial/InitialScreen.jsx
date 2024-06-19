import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { ButtonNavigate } from '../components/ButtonNavigate';
import { Inter_Medium } from '../../../assets/fonts/fonts';

const InitialScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const icon_email = require('../../../assets/icons/email.png');
    const icon_password = require('../../../assets/icons/password.png');
    const logo = require('../../../assets/img/logo-sem-nome.png');

    const closeModal = () => {
        setModalVisible(false);
    };

    console.log('Modal Visible:', modalVisible); 
    return (
        <View style={styles.container}>
            <View style={styles.imageDiv}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
                <Text style={styles.title}>FoundCare</Text>
            </View>
            <View>
                <View style={styles.inputContainer}>
                    <Image style={styles.icon} source={icon_email} />
                    <TextInput
                        placeholder="Digite aqui seu e-mail"
                        inputMode="text"
                        style={styles.inputIcon}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.icon} source={icon_password} />
                    <TextInput
                        placeholder="Digite aqui sua senha"
                        inputMode="text"
                        secureTextEntry={true}
                        style={styles.inputIcon}
                    />
                </View>
                <View style={styles.viewCenter}>
                    <ButtonNavigate style={styles.button} page="HomeProfissional" textButton="Entrar" onPress={closeModal} />

                    <Text style={styles.text}>Não possui cadastro?</Text>
                    <ButtonNavigate style={styles.button} page="CadastroCliente" textButton="Cadastro Paciente" />
                    <ButtonNavigate style={styles.button} page ="CadastroEnfermeiro" textButton="Cadastro Enfermeiro" />
                    

                    <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                        <Text style={styles.text}>Cadastro</Text>
                    </TouchableOpacity>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={closeModal}
                    >
                        <TouchableWithoutFeedback onPress={closeModal}>
                            <View style={styles.modalOverlay}>
                                <View style={styles.modalContent}>
                                    <Text>Como você deseja se cadastrar?</Text>
                                    <ButtonNavigate
                                        style={styles.navigateButton}
                                        page="CadastroCliente"
                                        textButton="Paciente"
                                        onPress={() => {
                                            closeModal();
                                        }}
                                    />
                                    <ButtonNavigate
                                        style={styles.navigateButton}
                                        page="Cadastro"
                                        textButton="Profissional"
                                        onPress={() => {
                                            closeModal();
                                        }}
                                    />
                                    <TouchableOpacity onPress={closeModal}>
                                        <Text>Fechar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>


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
        backgroundColor: '#fff',
    },
    imageDiv: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 500, 
        height: 350, 
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        left: 10,
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    inputIcon: {
        flex: 1,
        height: 40,
        backgroundColor: '#2DC7E4',
        borderRadius: 5,
        textAlign: 'left',
        color: 'white',
        fontFamily: Inter_Medium,
        fontSize: 13,
        paddingLeft: 40,
    },
    button: {
        marginVertical: 10,
        width: '80%',
    },
    text: {
        fontFamily: Inter_Medium,
        fontSize: 20,
        color: '#333',
        marginVertical: 10,
        textAlign: 'center',
    },
    title: {
        color: '#2DC7E4',
        fontSize: 32,
        fontFamily: Inter_Medium,
        marginVertical: 20,
        textAlign: 'center',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
});

export { InitialScreen };
