import React from 'react';
import { Text } from 'react-native';
import { NavigationNativeContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Wildcard({ title }) {
    return <Text>Wildcard {title}</Text>
}

export default function HomeRoutes() {
    return (
        <Tab.Navitagor>
            <Tab.Screen name="Incidents" component={ () => <Wildcard title='Incidents' />} />
            <Tab.Screen name="Detail" component={ () => <Wildcard title='Detail' />} />
        </Tab.Navitagor>
    );
} 