import { ADD_ITEM, CONFIRM_CART, DELETE_ITEM } from "../actions/cart.action";

import { interpolateNode } from "react-native-reanimated";

const itemsCart = [
    {
        id: '1',
        name: 'Pan Ciabatta',
        price: 1200,
        quantity: 2,
    },
    {
        id: '2',
        name: 'Pan Baguette',
        price: 1500,
        quantity: 3,
    },
    {
        id: '4',
        name: 'Pan de Molde Integral',
        price: 3300,
        quantity: 1,
    }
]

const sumTotal = list => list
    .map(item => item.quantity * item.price)
    .reduce((a, b) => a + b, 0)

const INITIAL_STATE = {
    items: itemsCart,
    total: sumTotal(itemsCart),
    confirm: false,
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const indexItem = state.items.findIndex(item => item.id === action.item.id)
            if (indexItem === -1) {
                const item = { ...action.item, quantity: 1 }
                const updated = [...state.items, item]

                return {
                    ...state,
                    items: updated,
                    total: sumTotal(updated)
                };
            }
            const updated = state.items.map(item => {
                if (item.id === action.item.id) item.quantity++;
                return item;
            })
            return {
                ...state,
                items: updated,
                total: sumTotal(updated)
            }
        case DELETE_ITEM:
            const cleanCart = state.items.filter(item => item.id !== action.itemID)
            return {
                ...state,
                items: cleanCart,
                total: sumTotal(cleanCart)
            }

        default:
            return { ...state }
    }
}

export default CartReducer;