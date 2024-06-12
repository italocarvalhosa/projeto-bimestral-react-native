import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Inter_Medium } from '../../../assets/fonts/fonts';

const user = '../../../assets/img/user-profile.jpg';

const styles = StyleSheet.create({
    divHeader: {
        flexDirection: 'row',
        marginTop: 50,
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 24,
        color: "#FFFFFF",
        fontFamily: Inter_Medium
    },
    imageHeader: {
        height: 65,
        width: 65,
        borderRadius: 30
    },
});

const HomeHeader = () => {

    return (
        <View style={styles.divHeader}>
            <View>
                <Text style={styles.textHeader}>
                    Que tipo de serviço está anunciando?
                </Text>
            </View>
            <Image source={
                require(user)
            }
                style={styles.imageHeader}
            />
        </View>
    );
};

export { HomeHeader };