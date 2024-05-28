import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeText = () => {
    return (
        <Text style={styles.textHome}>
            A FoundCare pretende revolucionar o mercado de HomeCare {"\n"}
            Buscamos tornar a busca por profissionais da saúde, algo acessível
        </Text>
    );
};

const styles = StyleSheet.create({
    textHome: {
        textAlign: 'center',
        fontSize: 16,
        
    }
});

export { HomeText };
