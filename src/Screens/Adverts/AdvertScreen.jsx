import React from 'react';
import { View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Feed } from './components/Feed/Feed';

const AdvertScreen = () => {

    return (
        // View responsável por habilitar a rolagem da tela
        <ScrollView>
            <View style={styles.container}>

                <Feed />
                
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '110%'
    }, 
});

export { AdvertScreen };
