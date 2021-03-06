import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import styles from './styles';

import logoImg from '../../assets/logo.png'

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const navigation = useNavigation();

    function navigateToDetail(incidents) {
        navigation.navigate('Casos', { incidents });
    }

    async function loadIncidents() {
        const response = await api.get('incidents');

        setIncidents(response.data);
    }

    useEffect(() => {
        loadIncidents();
        // const userName = AsyncStorage.getItem(userName);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Bem-Vindo, Breno.
                </Text>
            </View>


            <FlatList
                data={incidents}
                style={styles.incidentsList}
                showsVerticalScrollIndicator={false}
                keyExtractor={incidents => String(incidents._id)}
                renderItem={({ item: incidents }) => (
                    <View style={styles.incident} elevation={6}>
                        <Text style={styles.incidentProperty}>Bairro:</Text>
                        <Text style={styles.incidentValue}>Sapiranga</Text>

                        <Text style={styles.incidentProperty}>Distância:</Text>
                        <Text style={styles.incidentValue}>1.7Km</Text>

                        <Text style={styles.incidentProperty}>Detalhes:</Text>
                        <Text style={styles.incidentValue}>{incidents.description}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incidents)}
                        >
                            <Text style={styles.detailsButtonText}>Ajudar no caso!</Text>
                            <Feather name='arrow-right' size={20} color={'#0CC7BF'}></Feather>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}