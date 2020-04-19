import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import styles from './styles';

import logoImg from '../../assets/logo.png'

export default function Incidents() {
    const [incident, setIncident] = useState([]);
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Home', { screen: 'Detail' });
    }

    async function loadIncidents() {
        const response = await api.get('incident');

        setIncident(response.data);
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
                data={incident}
                style={styles.incidentList}
                showsVerticalScrollIndicator={false}
                keyExtractor={incident => String(incident.id)}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident} elevation={6}>
                        <Text style={styles.incidentProperty}>Bairro:</Text>
                        <Text style={styles.incidentValue}>Sapiranga</Text>

                        <Text style={styles.incidentProperty}>Distância:</Text>
                        <Text style={styles.incidentValue}>1.7Km</Text>

                        <Text style={styles.incidentProperty}>Detalhes:</Text>
                        <Text style={styles.incidentValue}>{incident.description}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={navigateToDetail}
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