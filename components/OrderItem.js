import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const formatDate = time => {
    const date = new Date(time)
    return date.toLocaleDateString();
}
const sumTotal = list => list
    .map(item => item.quantity * item.price)
    .reduce((a, b) => a + b, 0)


const OrderItem = ({item, onDelete}) => {
    return(
        <View style={styles.order}>
            <View style={styles.data}>
                <Text>{formatDate(item.date)}</Text>
                <Text>{sumTotal(item.items)}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.button}>
                    <Ionicons size={16} name='md-trash' />
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    order: {
        flexDirection:'row',
        width:'100%',
        justifyContent: 'space-between',
        height:60,
        paddingBottom:10,
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
    },
    data:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:60,
    },
    actions: {
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        height:60,
    },
    button: {
        backgroundColor: Colors.primaryColor,
        width: 24,
        height: 24,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    }
})

export default OrderItem;