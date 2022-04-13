import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const BreadItem = ({item, onSelected}) => {
    return (
        <View style={styles.gridItem}>
        <TouchableOpacity 
        onPress= {() => onSelected(item)}
        style = {{...styles.container, backgroundColor: '#252323'}}
        >
            <View>
                <Text style={styles.title}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default BreadItem

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 10,
        height: 100,
    },
    container : {
        flex: 1,
        borderRadius:6,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0 , height: 2},
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: 'white',
        fontSize: 16,
    }
})
