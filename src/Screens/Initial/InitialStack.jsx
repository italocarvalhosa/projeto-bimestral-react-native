import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { InitialScreen } from './InitialScreen';
import { HomeNavigation } from '..';
import { ClienteScreen } from '../Register/ClienteScreen';
import { EnfermeiroScreen } from '../Register/EnfermeiroScreen';

const Stack = createStackNavigator();

const Index = () => {

    return (
        <NavigationContainer>

            <Stack.Navigator
                initialRouteName='Initial'

                screenOptions={
                    {
                        headerShown: false
                    }
                }
            >

                <Stack.Screen name='Initial' component={InitialScreen} />
                <Stack.Screen name="CadastroCliente" component={ClienteScreen} />
                <Stack.Screen name="CadastroEnfermeiro" component={EnfermeiroScreen} />
                <Stack.Screen name="HomeProfissional" component={HomeNavigation} />
           </Stack.Navigator>
        </NavigationContainer>
    );

};


export { Index }