import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
const icon = '../../../../assets/img/search.png';

const styles = StyleSheet.create({
    divInput: {
        backgroundColor: "#FFFFFF",
        width: '80%',
        height: 58,
        borderRadius: 12,
        marginTop: 30
    },
    inputHome: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

const InputSearch = () => {

    return (
        <View style={styles.divInput}>
            <View
                style={styles.inputHome}
            >
                <Image
                    source={
                        require(icon)
                    }
                    style={
                        {
                            marginLeft: 12,
                            width: 24,
                            height: 24
                        }
                    }
                />
                <TextInput
                    placeholder='Pesquisar'
                    style={
                        {
                            fontSize: 16,
                            marginLeft: 12
                        }
                    }
                />
            </View>
        </View>
    );
};

export { InputSearch };
