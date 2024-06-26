import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { InitialScreen } from './Initial/InitialScreen';
import { HomeNavigation } from '.';

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
                <Stack.Screen name="HomeProfissional" component={HomeNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );

};


export { Index }