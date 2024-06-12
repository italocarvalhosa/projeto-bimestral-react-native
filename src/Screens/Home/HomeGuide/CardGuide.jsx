import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Inter_Medium } from "../../../../assets/fonts/fonts";

const styles = StyleSheet.create({
    cardGuide: {
        width: 270,
        height: 280,
        marginLeft: 11,
        marginRight: 11,
        alignItems: 'flex-start',
        backgroundColor: '#73ABFF',
        borderRadius: 30,
        padding: 16,
    },
    textGuide: {
        color: '#FFFFFF',
        fontSize: 32,
        fontFamily: Inter_Medium,
        margin: 10
    },
    describeGuide: {
        color: '#FFFFFF',
        margin: 5,
        fontSize: 18
    }

});

const CardGuide = ({textGuide, items}) => {
    return (
        <View style={styles.cardGuide}>
            <Text style={styles.textGuide}>{textGuide}</Text>

            {items.map(text => {
                return (
                    <Text style={styles.describeGuide}>{text}</Text>
                );
            })}

        </View>
    );
}

export { CardGuide };