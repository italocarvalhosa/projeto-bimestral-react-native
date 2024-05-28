import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomeText = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHome}>
                A FoundCare pretende revolucionar o mercado de HomeCare.
            </Text>
            <Text style={styles.textHome}>
                Buscamos tornar a busca por profissionais da saúde, algo acessível.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '20%',
        width: '80%',
    },
    textHome: {
        textAlign: 'justify',
        fontSize: 16,
    }
});

export { HomeText };
