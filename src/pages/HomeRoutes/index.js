import React from 'react';
import { View, Text } from 'react-native';
// import styles from '../Profile/styles';

export default function HomeRoutes(){
    return(
        <View style={styles.container}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Este é seu perfil</Text>
        </View>
    );
}