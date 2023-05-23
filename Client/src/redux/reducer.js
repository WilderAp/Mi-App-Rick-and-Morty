import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== payload),
            }
            
    
  
        default:
           return {...state};
    }
}

export default reducer;