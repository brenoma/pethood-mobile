import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Logon() {
    const navigation = useNavigation();

    function navigateToLogon() {
        navigation.navigate('Logon');
    }

    function navigateToHome() {
        navigation.navigate('Home');
    }

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 150 }));
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
                duration: 400,
            })
        ]).start();
        Animated.timing(opacityHeader, {
            toValue: 1,
            duration: 6000,
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
            <View style={[styles.header]}>
                <Image source={logoImg} />
                <Text style={styles.title}>Pethood</Text>
            </View>


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
                        placeholderTextColor={'#fff'}
                        keyboardType={"default"}
                        placeholder='Nome Completo'
                        autoCorrect={false}
                        leftIcon={
                            <Icon
                                style={{ paddingRight: 10 }}
                                name='user'
                                size={22}
                                color='#0CC7BF'
                            />
                        }
                    />
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Input
                        placeholderTextColor={'#fff'}
                        keyboardType={"email-address"}
                        placeholder='Email'
                        autoCorrect={false}
                        leftIcon={
                            <Icon
                                style={{ paddingRight: 10 }}
                                name='at'
                                size={22}
                                color='#0CC7BF'
                            />
                        }
                    />
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Input
                        placeholderTextColor={'#fff'}
                        keyboardType={"default"}
                        placeholder='Cidade'
                        autoCorrect={false}
                        leftIcon={
                            <Icon
                                style={{ paddingRight: 10 }}
                                name='home'
                                size={22}
                                color='#0CC7BF'
                            />
                        }
                    />
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Input
                        placeholderTextColor={'#fff'}
                        keyboardType={"default"}
                        placeholder='Estado'
                        autoCorrect={false}
                        leftIcon={
                            <Icon
                                style={{ paddingRight: 10 }}
                                name='flag'
                                size={22}
                                color='#0CC7BF'
                            />
                        }
                    />
                </View>

                <View style={{ marginBottom: 36 }}>
                    <Input
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

                <View >
                    <TouchableOpacity
                        style={styles.logonButton}
                        onPress={navigateToHome}
                    >
                        <Text style={styles.logonButtonText}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.registerButton}
                        onPress={navigateToLogon}
                    >
                        <Text style={styles.registerButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>

            </Animated.View>
        </KeyboardAvoidingView>
    );
}