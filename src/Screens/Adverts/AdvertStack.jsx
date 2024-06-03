import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AdvertScreen } from './AdvertScreen';


const Stack = createStackNavigator();

const AdvertStack = () => {
    return (
        // Cria uma stack de navegação para a página de anúncios dos clientes
        <Stack.Navigator>
            <Stack.Screen name="Anúncios" component={ AdvertScreen } />
        </Stack.Navigator>
    );
};



export { AdvertStack };