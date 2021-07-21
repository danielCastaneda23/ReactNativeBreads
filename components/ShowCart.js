import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ShowCart = ({navigation}) => {
    const handleShowCart = () => navigation.push('Cart')
    return (
        <View >
            <Button title="Ver Carrito" onPress={handleShowCart}/>
        </View>
    )
}

export default ShowCart

const styles = StyleSheet.create({})
