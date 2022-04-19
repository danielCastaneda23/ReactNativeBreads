import { StyleSheet, Text, View } from 'react-native'

import BreadDetailScreen from '../../screens/BreadDetailScreen'
import CategoriesScreen from '../../screens/CategoriesScreen'
import CategoryBreadScreen from '../../screens/CategoryBreadScreen'
import Colors from '../../constants/Colors'
import { NavigationContainer } from '@react-navigation/native'
import { Platform } from 'react-native-web';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const BreadStack = createStackNavigator();
const ShopNavigator = () => {
    return (
        <BreadStack.Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'ios' ? '' : Colors.primaryColor,
                },
                headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <BreadStack.Screen name='Home' component={CategoriesScreen} options={{ title: 'Nuestra Panaderia' }} />
            <BreadStack.Screen name='BreadCategory' component={CategoryBreadScreen} options={({ route }) => ({ title: route.params.name })} />
            <BreadStack.Screen name='DetailBread' component={BreadDetailScreen} options={({ route }) => ({ title: route.params.name })} />
        </BreadStack.Navigator>
    )
}

export default ShopNavigator

const styles = StyleSheet.create({})
