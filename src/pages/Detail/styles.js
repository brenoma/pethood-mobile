import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#100730',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    mapView: {
        position: 'absolute',
        top: 40,
        left: 20,
        bottom: 290,
        right: 20,
    },

    placesContainer: {
        width: '100%',
        maxHeight: 280,
        paddingBottom: 0,
    },

    place: {
        width: width-40,
        maxHeight: 200,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 8,
    }
})