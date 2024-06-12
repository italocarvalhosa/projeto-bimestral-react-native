import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Inter_Medium } from "../../../../assets/fonts/fonts";
const img = '../../../../assets/img/elipse.png';

const styles = StyleSheet.create({
    divService: {
        marginRight: 15,
        marginLeft: 12,
        alignItems: 'center'
    },
    imgService: {

    },
    textService: {
        color: "#FFFFFF",
        fontFamily: Inter_Medium
    },

});

const CardService = ({ service }) => {
    return (
        <View style={styles.divService}>
            <Image source={
                require(img)
            }
                style={styles.imgService}
            />
            <Text
                style={styles.textService}
            >
                {service}
            </Text>
        </View>
    );
};

export { CardService };
