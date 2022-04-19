import { StyleSheet, Text, View } from 'react-native'

import AuthScreen from '../../screens/user/AuthScreen';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator
        initialRouteName= "Login"
        screenOptions={{
            headerShown: false,
        }}
        >

            <AuthStack.Screen name="Login" component={AuthScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator

const styles = StyleSheet.create({})
