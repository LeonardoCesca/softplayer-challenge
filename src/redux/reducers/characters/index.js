import { GET_CHARACTERS } from "../../types/characters";

const initialState = {
  characters: [],
  loadingCharacters: true,
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        loadingCharacters: false,
        characters: action.characters, 
      };
    default:
      return state;
  }
};
