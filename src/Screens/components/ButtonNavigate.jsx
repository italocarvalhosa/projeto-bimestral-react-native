import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import { Inter_Regular } from '../../../assets/fonts/fonts';

// estilização da página
const styles = StyleSheet.create(
    {
        container:{
            margin: 10
        },
        botao: {
            width: 100,
            height: 40,
            backgroundColor: '#89CEFF',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20
        },
        botaoText: {
            color: '#FFF',
            fontFamily: Inter_Regular,
            fontSize: 16
       }
    }
);

// page -> página destino.
// textButton -> texto no botão de navegação.
const ButtonNavigate = ({ page, textButton }) => {
    // cria uma navigation -> metodo da classe `Native` para funções de navegação.
    const navigation = useNavigation();

    // função para navegação
    const navigateToScreen = () => {
    // navega entre as páginas
        navigation.navigate(page);
    };

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.botao}
                // aciona a função navigateScreen
                // onPress={() => navigation.navigate(page)}
                onPress={navigateToScreen}
            >
                <Text style={styles.botaoText}>
                    {textButton}
                </Text>
            </Pressable>
        </View>
    );
}

export { ButtonNavigate };