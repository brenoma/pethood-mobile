import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Logon from './pages/Logon';
import Register from './pages/Register';
import Home from './pages/Home';

// import HomeRoutes from './routes/home.routes';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='Logon'
            >
                <AppStack.Screen name='Logon' component={Logon} />
                <AppStack.Screen name='Register' component={Register} />
                <AppStack.Screen name='Home' component={Home} />
                {/* <AppStack.Screen name='HomeRoutes' component={HomeRoutes} options={{ title: 'HomeRoutes'}} /> */}
            </AppStack.Navigator>
        </NavigationContainer>
    );
}