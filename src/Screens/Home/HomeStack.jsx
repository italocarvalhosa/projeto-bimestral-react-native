import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { HeaderButton } from '../components/HeaderButton';
import { AboutScreen } from '../About/AboutScreen';
import { InitialScreen } from '../Initial/InitialScreen';

// função responsável por criar uma Stack de navegação
const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return (
        // cria um componente para navegação entre Stacks
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} 
                options={{
                    // Propriedade usada para colocar um elemento na parte direita da Stack
                    // Podemos retornar um texto, uma imagem ou qualquer outro elemento
                    headerRight: () => (
                        // retorna um botão que transita entre as telas
                        <HeaderButton page="Sobre nós" text="Alo Arthur" />
                    )
                }}
             />
             <Stack.Screen name="Initial" component={ InitialScreen } />
             <Stack.Screen name="Sobre nós" component={ AboutScreen } />
        </Stack.Navigator>

    );

};

export { HomeStack };