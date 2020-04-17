import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#100730',
        // justifyContent: 'space-around'
    },

    header: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 24,
        height: '30%',
    },

    title: {
        fontSize: 35,
        color: '#0CC7BF',
        fontWeight: 'bold',
    },

    logon: {
        flex: 1,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    input: {
        marginBottom: 20,
        padding: 300,
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        alignSelf: 'center',
    },

    logonButton: {
        // marginTop: 25,
        // margin: 10,
        height: 40,
        width: '70%',
        backgroundColor: "#0bb297",
        borderRadius: 15,
        justifyContent: 'center',
        elevation: 6,
        alignSelf: 'center',
    },

    logonButtonText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },

    registerButton: {
        alignSelf: 'center',
        paddingTop: 25,
    },

    registerButtonText: {
        fontSize: 15,
        color: '#0CC7BF',
        fontWeight: 'bold',
    },

    textPicker: {
        width: 100,
        color: '#D3D3D3',
    },

    errorTxt: {
        color: 'red',
        paddingLeft: 10,
    }
});