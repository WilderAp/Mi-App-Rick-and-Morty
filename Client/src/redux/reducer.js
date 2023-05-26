import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_FAV:
            return { 
                ...state,
                myFavorites: payload,
                allCharacters: payload 
            };

        case REMOVE_FAV:
         return {
             ...state, 
             myFavorites: payload,
             allCharacters: payload
            };
            
        case FILTER:
            const allcharacterFiltered =  state.allCharacters.filter(char => 
             char.gender === payload)
            
            return {
               ...state,
               myFavorites: 
                    payload === 'allcharacters'
                    ? [...state.allCharacters]
                    : allcharacterFiltered //Esto ya es un array XD 
            }    
        case ORDER:
            const allcharacterCopy = [...state.allCharacters] //No creo q sea necesario guardarlo en un array, ya que la propiedad del estado lo es
            
            return {
                ...state,
                myFavorites:
                    payload === 'A' 
                    ? allcharacterCopy.sort((a, b) => a.id - b.id)
                    : allcharacterCopy.sort((a, b) => b.id - a.id)
            }    
  
        default:
           return {...state};
    }
}

export default reducer;