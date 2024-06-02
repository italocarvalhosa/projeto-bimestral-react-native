import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    postComment: {
        marginTop: 30,
        width: 350
    },
    postTextComment: {
        fontSize: 16,
        textAlign: 'justify'
    },
});

export const PostDescription = () => {
    return (
        <View style={styles.postComment}>
            <Text style={styles.postTextComment}>Minha tia avó está enfrentando um problema
                de úlcera na perna, já estavamos em contato com um outro profissional, porém o mesmo nos deixou na mão, agora precisamos de outro profissional para poder nos ajudar no tratamento.</Text>
        </View>
    );
};
