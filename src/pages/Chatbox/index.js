import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Chatbox/styles';

export default function Chatbox(){
    return(
        <View style={styles.container}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Estas são suas mensagens</Text>
        </View>
    );
}