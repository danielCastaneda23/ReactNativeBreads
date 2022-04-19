import { StyleSheet, Text, View } from 'react-native'

import CartScreen from '../../screens/CartScreen'
import Colors from '../../constants/Colors'
import { Platform } from 'react-native-web'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const CartStack = createStackNavigator()

const CartNavigator = () => {
    return (
        <CartStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'ios' ? '' : Colors.primaryColor,
                },
                headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >

            
            <CartStack.Screen 
            name='Cart'
            component={CartScreen}
            options={{title:'Carrito'}}
            />
        </CartStack.Navigator>
    )
}

export default CartNavigator

const styles = StyleSheet.create({})