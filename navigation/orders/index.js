import Colors from '../../constants/Colors'
import OrdersScreen from '../../screens/OrdersScreen'
import { Platform } from 'react-native-web'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const OrdersStack = createStackNavigator()

const OrdersNavigator = () => {
    return (
        <OrdersStack.Navigator
        initialRouteName='Orders'
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

            
            <OrdersStack.Screen 
            name='Orders'
            component={OrdersScreen}
            options={{title:'Ordenes'}}
            />
        </OrdersStack.Navigator>
    )
}

export default OrdersNavigator

