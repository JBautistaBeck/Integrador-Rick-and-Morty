export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'


export const add_fav = (character) => {
    return{
        type: ADD_FAV,
        payload: character,
    }
}

export const removeFav = (id) => {
    return{
        type: REMOVE_FAV,
        payload: id,
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