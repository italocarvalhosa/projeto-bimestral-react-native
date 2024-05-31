import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { HeaderButton } from '../components/HeaderButton';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} 
                options={{
                    headerRight: () => (
                        <HeaderButton page="About" text="Sobre nós"></HeaderButton>
                    )
                }}
             />
        </Stack.Navigator>
        
    );

};

export { HomeStack };