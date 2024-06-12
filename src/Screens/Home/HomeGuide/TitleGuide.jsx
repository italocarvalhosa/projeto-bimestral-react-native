import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Inter_Medium } from '../../../../assets/fonts/fonts';

const styles = StyleSheet.create({
    divGuide: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
        marginBottom: 15
    },
    titleGuide: {
        fontSize: 45,
        fontFamily: Inter_Medium,
        color: '#FFFFFF',
    },
});

const TitleGuide = ({title}) => {
    return (
        <View style={styles.divGuide}>
            <Text style={styles.titleGuide}>{title}</Text>
        </View>
    );
};

export { TitleGuide };