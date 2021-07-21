import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { confirmCart, deleteItem } from '../store/actions/cart.action';
import { useDispatch, useSelector } from 'react-redux'

import CartItem from '../components/CartItem';
import Colors from '../constants/Colors';
import React from 'react'

const CartScreen = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total)

    const handleDeleteItem = (id) => dispatch(deleteItem(id))
    const handleConfirmCart = () => dispatch(confirmCart(items))
    const renderItem = (data) => {
        return (
            <CartItem item={data.item} onDelete={handleDeleteItem} />
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View>
                <Button title="Confirmar" onPress={handleConfirmCart}></Button>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text}>Total</Text>
                <Text style={styles.text}>${total}</Text>
            </View>
        </View>
    )
}
export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
    },
    footer: {
        flex: 2,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    list: {
        flex: 8,
    },
    text: {
        fontSize: 24,
        // fontFamily: 'open-sans-bold',
        padding: 8,
    }
})
