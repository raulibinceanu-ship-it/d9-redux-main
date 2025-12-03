export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";

export const addToFavourites = (company) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: company,
  };
};
