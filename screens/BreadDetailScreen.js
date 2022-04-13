import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import ShowCart from '../components/ShowCart'
import { addItem } from '../store/actions/cart.action'

const BreadDetailScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const item = useSelector(state => state.breads.selected)
    console.log(item)
    const handleAddItem = () => {dispatch(addItem(item))}
    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <View>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <View>
                <Button title="Agregar Al carrito" onPress={handleAddItem}></Button>
            </View>
            <View>
                <ShowCart navigation={navigation} />
            </View>
        </View>
    )
}

export default BreadDetailScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        padding: 10,
    },
    title:{
        fontSize: 25,
    },
    price: {
        fontSize:40,
        // fontFamily:'open-sans'
    },
    description:{
        fontSize: 20
    }
})
