import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text, View, Image, StyleSheet } from "react-native";
import { Inter_Medium } from "../../../../assets/fonts/fonts";
import { CardService } from "./CardService";


const styles = StyleSheet.create({
    divServices: {
        marginTop: 30
    },
    
});

const HomeService = () => {
    return (
        <ScrollView style={styles.divServices}
            horizontal={true}
        >
            <CardService service="Vacina" />
            <CardService service="Troca de Fralda" />
            <CardService service="Higienização" />
            <CardService service="Higiene Básica" />
            <CardService service="Banho" />
            <CardService service="Fisioterapia" />
            <CardService service="Troca de cama" />
            
        </ScrollView>
    );
};

export { HomeService };
