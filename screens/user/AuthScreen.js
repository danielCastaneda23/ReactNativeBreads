import { Alert, Button, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { login, signup } from '../../store/actions/auth.action'

import Colors from '../../constants/Colors'
import Input from '../../components/Input'
import { useDispatch } from 'react-redux'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value,
        };

        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        };

        let updateFormIsValid = true;
        for (const key in updatedValidities) {
            updateFormIsValid = updateFormIsValid && updatedValidities[key];
        }

        return {
            formIsValid: updateFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        }
    }
    return state;
}

const AuthScreen = () => {
    const dispatch = useDispatch()
    const [error, setError] = useState(null)

    useEffect(() => {
        if (error) {
            Alert.alert("Ha ocurrido un error", error, [{ text: 'Ok' }])
        }
    }, [error])

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: '',
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false,
    })

    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            input: inputIdentifier,
            value: inputValue,
            isValid: inputValidity,
        })
    }, [dispatchFormState])


    const onSignupHandler = async () => {
        try {
            await dispatch(signup(formState.inputValues.email, formState.inputValues.password))
        } catch (err) {
            setError(err.message)
        }
    }

    const onLoginHandler = async () => {
        try{
            await dispatch(login(formState.inputValues.email, formState.inputValues.password))
        } catch (err) {
            setError(err.message)
        }
    }
    console.log(formState)
    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.screen}
        >
            <View style={styles.container}>
                <Text style={styles.title}>MI PAN: LOGIN</Text>
                <View>
                    <Input
                        id="email"
                        label="Email"
                        keboardType="email-address"
                        required
                        email
                        autoCapitalize="none"
                        errorText="Por favor ingrese un email valido"
                        onInputChange={onInputChangeHandler}
                        initialValue=""
                    />

                    <Input
                        id="password"
                        label="Clave"
                        keyboardType="default"
                        secureTextEntry
                        required
                        minLength={6}
                        autoCapitalize="none"
                        errorText="Porfavor ingrse una clave de al menos 6 caracteres"
                        onInputChange={onInputChangeHandler}
                        initialValue=""
                    />
                </View>
                <View>
                    <View>
                        <Button title="ACCEDER" color={Colors.primaryColor} onPress={onLoginHandler} />
                    </View>
                    <View>
                        <Button title="REGISTRARSE" color={Colors.accentColor} onPress={onSignupHandler} />
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        // fontFamily: '',
        marginBottom: 18,
    },
    container: {
        width: '80%',
        maxWidth: 400,
        height: '50%',
        maxHeight: 400,
        padding: 12,
    },
    footer: {
        marginTop: 24,
    },
    button: {
        marginBottom: 8
    }
})
