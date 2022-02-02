import { GET_CHARACTERS } from "../../types/characters";
import marvelService from "../../../services/marvel.service";

export const returnCharacters = () => {
    return (dispatch) => {
        marvelService.getAllCharacters().then(item => dispatch({type: GET_CHARACTERS, characters: item.data.data.results})); 
    }
}
