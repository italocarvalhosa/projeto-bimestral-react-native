import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AdvertScreen } from './AdvertScreen';


const Stack = createStackNavigator();

const AdvertStack = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Anúncio" component={ AdvertScreen } />
        </Stack.Navigator>
    );
};



export { AdvertStack };