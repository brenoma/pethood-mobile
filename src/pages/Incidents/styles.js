import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#100730',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },

    headerText: {
        fontSize: 13,
        color: '#fff'
    },

    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    incidentList: {
        marginTop: 10,
    },

    incident: {
        borderRadius: 8,
        backgroundColor: '#FFF',
        padding: 20,
        marginBottom: 16,
    },

    incidentProperty: {
        color: '#0CC7BF',
        fontWeight: 'bold',
        fontSize: 14,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    detailsButtonText: {
        color: '#0CC7BF',
        fontSize: 15,
        fontWeight: 'bold',
    }

})
