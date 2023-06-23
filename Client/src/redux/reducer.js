import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"

let initialState = { myFavorites: [], allCharacters: [] }//HW ALLCHARACTERS

function rootReducer(state = initialState, action) { //En actions se podria hacer un destructuring ({type,payload}) para no tener que usar mas abajo "action.payload" 
    switch (action.type) {
        case ADD_FAV:
            return{
                ...state,         
                myFavorites: action.payload,
                allCharacters: action.payload, 
            }
        
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,    
            }
        //HW
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter((character)=> character.gender === action.payload)
            return{
                ...state,
                myFavorites: allCharactersFiltered
            }
        //hw
        case ORDER:
            const allCharactersCopy = [...state.allCharacters]
            return{
                ...state,
                myFavorites: 
                action.payload === "A" 
                ? allCharactersCopy.sort((a,b) => a.id - b.id)
                : allCharactersCopy.sort((a,b) => b.id - a.id)
            }

        default: 
            return {...state}
    }
}

export default rootReducer;