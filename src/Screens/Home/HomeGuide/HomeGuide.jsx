import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CardGuide } from "./CardGuide";

const styles = StyleSheet.create({
    containerGuide: {
        width: 246,
        height: 280,
        marginBottom: 15,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
    
});

const HomeGuide = () => {
    return (

        <View style={styles.containerGuide}>

            <ScrollView
                horizontal={true}>

                <CardGuide 
                    textGuide="Perfil"
                    items={[
                        'Mantenha seu perfil sempre atualizado',
                        'Descreva detalhadamente suas experiências anteriores',
                        'Se atende as avaliações dos clientes sobre o seu serviço'
                    ]}

                />
                <CardGuide 
                    textGuide="Clientes"
                    items={[
                        'Mantenha um relacionamento bom com os clientes, as avaliações deles pesam no seu perfil.',
                        'Não deixe de avaliar os clientes após o término de um serviço'
                    ]}

                />
                
            </ScrollView>

        </View>
    );
};

export { HomeGuide };