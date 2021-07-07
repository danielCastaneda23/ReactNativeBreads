import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import { BREADS } from '../data/breads'
import BreadItem from '../components/BreadItem'
import React from 'react'

const CategoryBreadScreen = ({navigation, route}) => {
    const {categoryID} = route.params;
    const displayBreads = BREADS.filter(item => item.category === categoryID)

    const handleSelected = (item) => {
        navigation.navigate('DetailBread',{
            name: item.name,
            detail: item.description,
            weight: item.weight,
            price: item.price,
        })
    }
    const renderItem = ({item}) => <BreadItem item = {item} onSelected={handleSelected}/>
    return (
        <FlatList 
            data= {displayBreads}
            renderItem = {renderItem}
            keyExtractor = { item => item.id}
        />

    )
}

export default CategoryBreadScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
})
