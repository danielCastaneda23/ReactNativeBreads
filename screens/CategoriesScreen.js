import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import { CATEGORIES } from '../data/mock-data'
import CategoryGridItem from '../components/CategoryGridItem'
import React from 'react'

const CategoriesScreen = ({navigation}) => {
    
    const handleSelected = (item) => {
        navigation.navigate('BreadCategory', {
            categoryID: item.id,
            name: item.title,
        })
    }
    const renderItem = ({item}) => <CategoryGridItem item={item} onSelected={handleSelected} />
    return (
        <FlatList 
        data = {CATEGORIES}
        renderItem={renderItem}
        keyExtractor = {item => item.id}
        numColumns={2}
        />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
})
