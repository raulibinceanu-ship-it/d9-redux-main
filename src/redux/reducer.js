import { ADD_TO_FAVOURITES } from "./actions";

const initialState = {
  favourites: [], // l’elenco delle aziende preferite
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };

    default:
      return state;
  }
};

export default mainReducer;
