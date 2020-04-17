import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../Detail/styles';
import MapView from 'react-native-maps';

export default function Detail() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapView}
                region={{
                    latitude: -3.801054,
                    longitude: -38.468000,
                    latitudeDelta: 0.0122,
                    longitudeDelta: 0.0102,
                }}
                rotateEnabled={false}
                scrollEnabled={false}
                zoomEnabled={false}
                showsPointsOfInterest={false}
                showsBuildings={false}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: -3.801054,
                        longitude: -38.468000,
                    }}
                />
            </MapView>
            <ScrollView
                style={styles.placesContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            >
                <View style={styles.place}></View>
                <View style={styles.place}></View>
            </ScrollView>
        </View>
    );
}