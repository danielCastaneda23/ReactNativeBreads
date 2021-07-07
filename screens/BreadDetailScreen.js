import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const BreadDetailScreen = ({route}) => {
    const {name,detail,price} = route.params

    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.title}>{name}</Text>
            </View>
            <View>
                <Text style={styles.description}>{detail}</Text>
            </View>
            <View>
                <Text style={styles.price}>${price}</Text>
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
