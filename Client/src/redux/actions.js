import axios from "axios"

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'



export const add_fav = (character) => {
    //return{type: ADD_FAV,payload: character}
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
        const { data } = await axios.post(endpoint, character)//PRIMER PARAMETRO: ruta . SEGUNDO PARAMETRO: lo que recibo por body, un obj
            
            return dispatch({
                type: ADD_FAV,
                payload: data,
            })
            
        } catch (error) {
            console.log(error)
        }
   };
}

export const removeFav = (id) => {
    //return{type: REMOVE_FAV,payload: id}
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {

        try {
        const { data } = await axios.delete(endpoint)//Esto devuelve el array de favoritos filtrado
            
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });

        } catch (error) {
                console.log(error)
        }
    }
}


//ULTIMA HW
export const filterCards = (gender) => {
    return {
        type: FILTER, 
        payload: gender,
    }
}

export const orderCards = (order) => { //ULTIMA HW
    return {
        type: ORDER, 
        payload: order,
    }
}