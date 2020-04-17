import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';


import Incidents from '../Incidents';
import Detail from '../Detail';
import Chatbox from '../Chatbox';
import Profile from '../Profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            backBehavior='history'
            tabBarOptions={{
                activeTintColor: '#0CC7BF',
                keyboardHidesTabBar: 'true',
                style: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    elevation: 3,
                    marginHorizontal: 30,
                    bottom: 15,
                    borderRadius: 30,
                    // zIndex: 1,
                    position: 'absolute',
                    height: 60,

                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Incidents}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Casos"
                component={Detail}
                options={{
                    tabBarLabel: 'Seus Pets',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="dog" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Messages"
                component={Chatbox}
                options={{
                    tabBarLabel: 'Mensagens',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="message-processing" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </ Tab.Navigator>
    );
}

export default function Home() {
    
    return (
        <NavigationContainer backBehavior='none' independent={true}>
            <MyTabs />
        </NavigationContainer>
    );
}