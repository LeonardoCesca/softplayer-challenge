import "@testing-library/jest-dom/extend-expect";
import { 
  GET_CHARACTERS,
  GET_CHARACTER_ID, 
  LOADING_CHARACTER_ID,
  UPDATE_CHARACTER,
} from "../../../types/characters";
import { charactersReducer } from "../index";

describe("Characters reducer test", () => {
  const initialState = {
    characters: [],
    loadingCharacters: true,
    loadingCurrentCharacter: true,
    isEdited: false,
  };

  it('should return initial state', () =>{
    expect(charactersReducer(initialState, {})).toEqual(initialState);
  });

  it("should handle GET_CHARACTERS", () => {
    expect(
      charactersReducer(initialState, {
      type: GET_CHARACTERS,
      })
    ).toEqual({ 
      characters: undefined, 
      loadingCharacters: false, 
      loadingCurrentCharacter: true, 
      isEdited: false 
    });
  });

  it("should handle GET_CHARACTER_ID", () => {
    expect(
      charactersReducer(initialState, {
      type: GET_CHARACTER_ID,
      })
    ).toEqual({ 
      characters: [], 
      loadingCharacters: true, 
      loadingCurrentCharacter: false, 
      isEdited: false 
    });
  });

  it("should handle LOADING_CHARACTER_ID", () => {
    expect(
      charactersReducer(initialState, {
      type: LOADING_CHARACTER_ID,
      })
    ).toEqual({ 
      characters: [], 
      loadingCharacters: true, 
      loadingCurrentCharacter: undefined, 
      isEdited: false 
    });
  });

  it("should handle UPDATE_CHARACTER", () => {
    expect(
      charactersReducer(initialState, {
      type: UPDATE_CHARACTER,
      })
    ).toEqual({ 
      characters: [
        {
          name: undefined,
        }
      ], 
      loadingCharacters: true, 
      loadingCurrentCharacter: true, 
      isEdited: true 
    });
  });

  it("should handle UPDATE_CHARACTER", () => {
    expect(
      charactersReducer(initialState, {
        type: 'TESTE',
      })
    ).toEqual({ 
      characters: [], 
      loadingCharacters: true, 
      loadingCurrentCharacter: true, 
      isEdited: false 
    });
  });
});
