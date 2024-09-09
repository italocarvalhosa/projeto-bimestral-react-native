import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import { Inter_Regular } from '../../../assets/fonts/fonts';

const ButtonNavigate = ({ page, textButton }) => { // Desestruturação das props diretamente nos parâmetros da função
    const navigation = useNavigation();

    const navigateToScreen = () => {
        if (page) {
            navigation.navigate(page);
        } else {
            console.error('A propriedade "page" não foi fornecida para ButtonNavigate.');
        }
    };

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.botao}
                onPress={navigateToScreen}
            >
                <Text style={styles.botaoText}>
                    {textButton}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    botao: {
        width: 100,
        height: 40,
        backgroundColor: '#2DC7E4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    botaoText: {
        color: '#FFF',
        fontFamily: Inter_Regular,
        fontSize: 16,
    },
});

export { ButtonNavigate };
