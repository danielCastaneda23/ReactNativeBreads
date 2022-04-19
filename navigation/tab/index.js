import { StyleSheet, Text, View } from "react-native";

import CartNavigator from "../cart";
import Colors from "../../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import OrdersNavigator from "../orders";
import React from "react";
import ShopNavigator from "../shop";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TabStack = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <TabStack.Navigator
            initialRouteName="Shop"
            tabBarOptions={{
                showLabel: false,
                style: {
                    ...styles.tabBar,
                    ...styles.shadow
                }
            }}
        >
            <TabStack.Screen 
            name='Shop' 
            component={ShopNavigator} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name="md-home" color={!!focused ? Colors.primaryColor : 'black'} size={24}/>
                        <Text>Tienda</Text>
                    </View>
                )
            }}
            />
            <TabStack.Screen 
            name='Orders' 
            component={OrdersNavigator} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name="md-list" color={!!focused ? Colors.primaryColor : 'black'} size={24}/>
                        <Text>Ordenes</Text>
                    </View>
                )
            }}
            />
            <TabStack.Screen 
            name='Cart' 
            component={CartNavigator}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name="md-cart" color={!!focused ? Colors.primaryColor : 'black'}size={24}/>
                        <Text>Carrito</Text>
                    </View>
                )
            }}
            />
        </TabStack.Navigator>
    )
}
const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 70,
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: { widht: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TabNavigator;
