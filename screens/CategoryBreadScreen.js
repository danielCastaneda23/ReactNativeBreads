import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { filterBread, selectBread } from '../store/actions/bread.action'
import { useDispatch, useSelector } from 'react-redux'

import { BREADS } from '../data/breads'
import BreadItem from '../components/BreadItem'
import React from 'react'
import ShowCart from '../components/ShowCart'
import { useEffect } from 'react'

const CategoryBreadScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const categoryBreads = useSelector(state => state.breads.filteredBreads)
    const category = useSelector(state => state.categories.selected)

    useEffect(() => {
        dispatch(filterBread(category.id))
    }, [])

    const handleSelected = (item) => {
        dispatch(selectBread(item.id))
        navigation.navigate('DetailBread', { name: item.name, })
    }
    const renderItem = ({ item }) => <BreadItem item={item} onSelected={handleSelected} />
    return (
        <View>
            <FlatList
                data={categoryBreads}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <ShowCart navigation={navigation} />
        </View>


    )
}

export default CategoryBreadScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
