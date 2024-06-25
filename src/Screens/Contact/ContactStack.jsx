import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactScreen } from './ContactScreen'; // Corrigir o caminho de importação

const Stack = createNativeStackNavigator();

const ContactStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contato' }} />
        </Stack.Navigator>
    );
};

export { ContactStack };
