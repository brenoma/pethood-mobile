import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#100730',
        justifyContent: 'center',
        alignItems: 'center',
    },
})