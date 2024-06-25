import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ContactScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entre em contato conosco!</Text>
            <Text style={styles.subtitle}>Estamos à disposição para te dar suporte através do nosso email e telefone:</Text>

            {/* Ícone e texto para e-mail */}
            <View style={styles.row}>
                <Ionicons name="mail-outline" size={30} color="black" />
                <Text style={styles.text}>E-mail: exemplo@exemplo.com</Text>
            </View>

            {/* Ícone e texto para telefone */}
            <View style={styles.row}>
                <Ionicons name="call-outline" size={30} color="black" />
                <Text style={styles.text}>Telefone: (XX) XXXX-XXXX</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        marginLeft: 10,
    },
});

export { ContactScreen };
