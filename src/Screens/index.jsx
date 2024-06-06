import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStack } from './Home/HomeStack';
import { ProfileStack } from './Profile/ProfileStack';
import { AdvertStack } from './Adverts/AdvertStack';

const Tab = createBottomTabNavigator();

export function HomeNavigation()
{
    return (
        
            <Tab.Navigator

            initialRouteName='Home'
                
                screenOptions={
                    ({route}) => ({

                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;

                            const icon = (iconFocus, iconNotFocus) => {
                                iconName = focused ? iconFocus : iconNotFocus;
                            }

                            switch(route.name)
                            {
                                case 'HomeStack':
                                    icon('home', 'home-outline');
                                    break;
                                case 'AnunciosStack':
                                    icon('clipboard', 'clipboard-outline');
                                    break;
                                case 'PerfilStack':
                                    icon('person', 'person-outline');
                                    break;
                                default:
                                    break;
                            }
                            return <Ionicons name={iconName} size={size} color={color} />
                        },
                        tabBarActiveTintColor: "#89CEFF",
                        tabBarInactiveTintColor: 'gray',
                        headerShown: false
                    })
                }
            >
                <Tab.Screen name="HomeStack" component={ HomeStack } options={{title: 'Home'}} />
                <Tab.Screen name="AnunciosStack" component={ AdvertStack } options={{title: 'Anúncios'}} />
                <Tab.Screen name="PerfilStack" component={ ProfileStack } options={{title: 'Perfil'}} />
            </Tab.Navigator>
        
    );
}