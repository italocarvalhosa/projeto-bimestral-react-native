import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStack } from './Home/HomeStack';
import { ProfileStack } from './Profile/ProfileStack';
import { AdvertStack } from './Adverts/AdvertStack';

const Tab = createBottomTabNavigator();

export function RootNavigation()
{
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"

                screenOptions={
                    ({route}) => ({

                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;

                            if(route.name === 'HomeStack'){
                                iconName = focused
                                ? 'home'
                                : 'home-outline'
                            } else if(route.name == 'AnúnciosStack'){
                                iconName = focused
                                ? 'clipboard'
                                : 'clipboard-outline'
                            }
                            else if (route.name === 'PerfilStack'){
                                iconName = focused
                                ? 'person'
                                : 'person-outline';
                            }
                            return <Ionicons name={iconName} size={size} color={color} />
                        },
                        tabBarActiveTintColor: "#89CEFF",
                        tabBarInactiveTintColor: 'gray',
                        headerShown: false
                    })
                }
            >
                <Tab.Screen name="HomeStack" component={ HomeStack } options={{title: 'Home'}}/>
                <Tab.Screen name="AnúnciosStack" component={ AdvertStack } options={{title: 'Anúncios'}} />
                <Tab.Screen name="PerfilStack" component={ ProfileStack } options={{title: 'Perfil'}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}