import { 
  GET_CHARACTERS, 
  GET_CHARACTER_ID, 
  LOADING_CHARACTER_ID,
  UPDATE_CHARACTER,
} from "../../types/characters";

const initialState = {
  characters: [],
  loadingCharacters: true,
  loadingCurrentCharacter: true,
  isEdited: false,
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
    case LOADING_CHARACTER_ID:
      return {
        ...state,
        loadingCurrentCharacter: action.loadingCharacter,
      };
    case UPDATE_CHARACTER: 
      const selectedCharacter = state.characters.filter(charact => action.id === charact.id);
      const charactersLessCurrent = state.characters.filter(charact => action.id !== charact.id);

      const updatedCaracters = [
        {
          ...selectedCharacter[0],
          name: action.name,
        },
        ...charactersLessCurrent
      ];

      return {
        ...state,
        characters: updatedCaracters,
        isEdited: true
      };

    default:
      return state;
  }
};
