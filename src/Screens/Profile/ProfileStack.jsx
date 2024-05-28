import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileTopTab } from './ProfileTopTab.jsx';


const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Página de perfil" component={ ProfileTopTab }/>
        </Stack.Navigator>
    );
}

export { ProfileStack };