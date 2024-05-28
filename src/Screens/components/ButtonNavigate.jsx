import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Pressable, StyleSheet, View } from 'react-native';

const ButtonNavigate = ({ page, textButton }) => {
    const navigation = useNavigation();

    const navigateToScreen = () => {
        navigation.navigate(page);
    };

    return (
        <View>
            <Pressable
                style={StyleSheet.botao}
                onPress={navigateToScreen}
            >
                <Text style={StyleSheet.botaoText}>
                    {textButton}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create(
    {
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
    }
);

export { ButtonNavigate };