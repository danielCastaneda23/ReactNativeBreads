import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { deleteOrder, getOrders } from '../store/actions/order.action'
import { useDispatch, useSelector } from 'react-redux'

import OrderItem from '../components/OrderItem'

const OrdersScreen = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const orders = useSelector(state => state.orders.items)
    useEffect(() => {
        dispatch(getOrders(user))
        console.log('render')
    },[])
    const onDeleteHandler = (id) => dispatch(deleteOrder(id))

    const renderItem = (data) => (
        <OrderItem onDelete={onDeleteHandler} item={data.item} />
    )
  return (
    <View style={styles.container}>
        <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem = {renderItem}
        
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:12
    }
})

export default OrdersScreen