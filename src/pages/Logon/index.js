import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, Animated, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Formik } from 'formik';

import logoImg from '../../assets/logo.png';
import styles from './styles';

import api from '../../services/api';

export default function Logon() {
    const [user, setUser] = useState({});
    const navigation = useNavigation();


    function navigateToRegister() {
        navigation.navigate('Register');
    };

    function navigateToHome() {
        navigation.navigate('Home');
    };

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 110 }));
    const [opacity] = useState(new Animated.Value(0));
    const [opacityHeader] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 0.25,
                bounciness: 10,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 1500,
            })
        ]).start();
        Animated.timing(opacityHeader, {
            toValue: 1,
            duration: 3500,
        }).start();
    }, []);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.select({
                ios: 'padding',
                android: null,
            })}
        >
            <Animated.View
                style={[styles.header,
                {
                    opacity: opacityHeader,
                }
                ]}>
                <Image source={logoImg} />
                <Text style={styles.title}>Pethood</Text>
            </Animated.View>


            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={async (values) => {
                    try {
                        const response = await api.post('sessions', values);
                        // alert(`${response.name}`)

                        navigateToHome();
                        // const response = await api.get('');
                        // setUser(response.data._id);
                        // AsyncStorage.setItem('userName', userName);

                        // alert(`${response.data.name}`);
                        // navigateToHome();
                    } catch (err) {
                        alert('Usuário ou senha inválidos!');
                    }
                }}
            >
                {(props) => (

                    <Animated.View
                        style={[
                            styles.logon,
                            {
                                opacity: opacity,
                                transform: [
                                    { translateY: offset.y }
                                ]
                            }
                        ]}
                    >
                        <View style={{ marginBottom: 10 }}>
                            <Input
                                value={props.values.email}
                                onChangeText={props.handleChange('email')}
                                placeholderTextColor={'#fff'}
                                autoCapitalize={"none"}
                                keyboardType={"email-address"}
                                autoCompleteType={'email'}
                                placeholder={'Email'}
                                autoCorrect={false}
                                containerStyle={{}}
                                leftIcon={
                                    <Icon
                                        style={{ paddingRight: 10 }}
                                        name='at'
                                        size={22}
                                        color='#0CC7BF'
                                    />
                                }
                            />
                            {/* <TextInput
                        style={{width: '90%', height: 40, color: '#fff', backgroundColor: 'transparent', borderRadius: 7, alignSelf: 'center'}}
                        placeholderTextColor={'#fff'}
                        keyboardType='email-address'
                        label='Email'
                        placeholder='Email'
                        autoCapitalize='none'
                    /> */}
                        </View>

                        <View style={{ marginBottom: 36 }}>
                            <Input
                                value={props.values.password}
                                onChangeText={props.handleChange('password')}
                                placeholderTextColor={'#fff'}
                                secureTextEntry={true}
                                autoCorrect={false}
                                placeholder='Senha'
                                leftIcon={
                                    <Icon
                                        style={{ paddingRight: 10 }}
                                        name='key'
                                        size={22}
                                        color='#0CC7BF'
                                    />
                                }
                            />
                        </View>

                        {/* <View > */}
                        <TouchableOpacity
                            style={styles.logonButton}
                            onPress={props.handleSubmit}
                        >
                            <Text style={styles.logonButtonText}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.registerButton}
                            onPress={navigateToRegister}
                        >
                            <Text style={styles.registerButtonText}>Cadastrar-se</Text>
                        </TouchableOpacity>
                        {/* </View> */}

                    </Animated.View>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
}