import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import CategoryGridItem from '../components/CategoryGridItem'
import React from 'react'
import { selectCategory } from '../store/actions/category.action'

const CategoriesScreen = ({navigation}) => {
    const breadCategories = useSelector(state => state.categories.list);
    const dispatch = useDispatch()
    const handleSelected = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('BreadCategory', {name: item.title});

    }
    const renderItem = ({item}) => <CategoryGridItem item={item} onSelected={handleSelected} />
    return (
        <FlatList 
        data = {breadCategories}
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
