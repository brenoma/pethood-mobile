import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import api from '../../services/api';

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required('Nome é um campo obrigatório')
        .label('Name')
        .min(3, 'Seu nome é pequeno assim?'),
    password: yup
        .string()
        .required('Senha é um campo obrigatório')
        .label('Password')
        .min(5, 'Sua senha precisa ter mais de 5 caracteres.')
        .max(15, 'Sua senha só pode ter no máximo 15 caracteres.'),
    email: yup
        .string()
        .email('Digite um endereço de email válido')
        .required('Email é um campo obrigatório')
        .label('Email'),
    city: yup
        .string()
        .required('Cidade é um campo obrigatório')
        .min(2)
        .label('City'),
    uf: yup
        .string()
        .min(2)
        .max(2)
        .required('Estado é um campo obrigatório')
        .label('UF'),
    phone: yup
        .string()
        .min(8, 'Telefone inválido')
        .max(9, 'Telefone inválido')
        .required('Telefone é um campo obrigatório')
        .label('Telefone')
})

export default function Register() {
    const navigation = useNavigation();

    function navigateToLogon() {
        navigation.navigate('Logon');
    }

    function navigateToHome() {
        navigation.navigate('Home');
    }

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 110 }));
    const [opacity] = useState(new Animated.Value(0));

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


            <Formik
                validationSchema={validationSchema}
                initialValues={{ name: '', password: '', email: '', phone: '', city: '', uf: '' }}
                onSubmit={async (values) => {
                    try {
                        await api.post('users', values)
                    } catch (err) {
                        alert('Erro no cadastro, tente novamente');
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

                        <View style={{}}>
                            <Input
                                value={props.values.name}
                                onChangeText={props.handleChange('name')}
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
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{props.errors.name}</Text>
                        </View>

                        <View style={{}}>
                            <Input
                                value={props.values.email}
                                onChangeText={props.handleChange('email')}
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
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{props.errors.email}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ width: '70%' }}>
                                <Input
                                    value={props.values.city}
                                    onChangeText={props.handleChange('city')}
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
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{props.errors.city}</Text>
                            </View>
                            <View style={{ width: '30%', paddingBottom: 10}}>
                                <RNPickerSelect
                                    placeholderTextColor={'#fff'}
                                    placeholder={{
                                        label: 'UF',
                                        value: null,
                                    }}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'Ceará', value: 'CE' },
                                        { label: 'São Paulo', value: 'SP' }
                                    ]}
                                />
                            </View>
                        </View>

                        <View style={{}}>
                            <Input
                                value={props.values.phone}
                                onChangeText={props.handleChange('phone')}
                                placeholderTextColor={'#fff'}
                                keyboardType={'phone-pad'}
                                placeholder='Telefone'
                                autoCorrect={false}
                                leftIcon={
                                    <Icon
                                        style={{ paddingRight: 10 }}
                                        name='phone'
                                        size={22}
                                        color='#0CC7BF'
                                    />
                                }
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{props.errors.phone}</Text>
                        </View>

                        <View style={{ marginBottom: 20 }}>
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
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{props.errors.password}</Text>
                        </View>

                        <View >
                            <TouchableOpacity
                                style={styles.logonButton}
                                onPress={props.handleSubmit}
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
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
}