import { GET_CHARACTERS, GET_CHARACTER_ID, LOADING_CHARACTER_ID } from "../../types/characters";
import marvelService from "../../../services/marvel.service";

export const returnCharacters = () => {
    return (dispatch) => {
        marvelService.getAllCharacters().then(item => dispatch({type: GET_CHARACTERS, characters: item.data.data.results})); 
    }
};

export const returnCharacterById = (id) => {
    return (dispatch) => {
        marvelService.getCharacterById(id).then(item => dispatch({type: GET_CHARACTER_ID, characterId: item.data.data.results})); 
    }
};

export const isLoadingCharacterById = (loadingCharacter) => {
    return (dispatch) => {
        dispatch({
            type: LOADING_CHARACTER_ID, 
            loadingCharacter
        })
    }
};