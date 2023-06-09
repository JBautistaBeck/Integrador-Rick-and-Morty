import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"

let initialState = { myFavorites: [], allCharacters: [] }//HW ALLCHARACTERS

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return{
                ...state,         //cambia myFavorites por allcharectes
                myFavorites: [...state.allCharacters, action.payload ],
                allCharacters: [...state.allCharacters, action.payload ], //hw
            }
        
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((character) => { return character.id !== Number(action.payload)} )    
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