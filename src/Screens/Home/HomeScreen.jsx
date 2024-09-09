import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Inter_Regular } from '../../../assets/fonts/fonts';
import { HomeHeader } from './HomeHeader';
import { InputSearch } from './InputSearch';
import { HomeService } from './HomeService/HomeServices';
import { TitleGuide } from './HomeGuide/TitleGuide';
import { HomeGuide } from './HomeGuide/HomeGuide';
import { ButtonNavigate } from '../components/ButtonNavigate';


export const HomeScreen = () => {

    const linear = ['rgba(45,199,228,1)', 'rgba(255,255,255,1)'];

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.background}
                colors={linear}
            >
                <HomeHeader />
                <InputSearch />
                <HomeService />
                <TitleGuide title="Guia" />
                <HomeGuide />    

            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontFamily: Inter_Regular
    },
    background: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
});