import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileAnuncios } from './ProfileAnnouncement.jsx';
import { ProfileSettings } from './ProfileSettings.jsx';

const Tab = createMaterialTopTabNavigator();

const ProfileTopTab = () => {
    return (

        <Tab.Navigator
            
        
            screenOptions={{
                tabBarActiveTintColor: '#457878',
                tabBarLabelStyle: {
                    fontSize: 20
                },
                tabBarGap: 10,
                tabBarAndroidRipple: { 
                    borderless: false
                },
                
            }}
        >
            <Tab.Screen name="Anúncios" component={ ProfileAnuncios }/>
            <Tab.Screen name="Configurações" component={ProfileSettings}/>
        </Tab.Navigator>

    );
}

export { ProfileTopTab };