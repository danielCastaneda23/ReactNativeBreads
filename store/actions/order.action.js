import { URL_API } from "../../constants/database";

export const GET_ORDERS = 'GET_ORDERS';
export const DELETE_ORDERS = 'DELETE_ORDERS';

const orderByUserID = (data, user) => {
    const items =[];
    Object.keys(data).forEach(key => items.push({id: key, ...data[key]}));
    return items.filter(item => item.user === user);
}
export const getOrders = (user) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/ordenes.json`);
            const result = await response.json();
            const items = orderByUserID(result,user)

            dispatch({type: GET_ORDERS, payload: items});
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const deleteOrder = (id) => {
    return async dispatch => {
        try {
            await fetch(`${URL_API}/ordenes/${id}.json`, {
                method: 'DELETE',
            });
            dispatch({type: DELETE_ORDERS, order:id})
        } catch (error) {
            console.log(error)
        }
    }
}
