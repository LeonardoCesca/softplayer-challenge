import { GET_CHARACTERS, GET_CHARACTER_ID } from "../../types/characters";

const initialState = {
  characters: [],
  loadingCharacters: true,
  loadingCurrentCharacter: true,
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        loadingCharacters: false,
        characters: action.characters, 
      };
    case GET_CHARACTER_ID:
      return {
        ...state,
        loadingCurrentCharacter: false,
        currentCharacter: action.characterId
      };
    default:
      return state;
  }
};
