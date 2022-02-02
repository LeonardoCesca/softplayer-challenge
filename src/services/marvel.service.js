import api from "./axios";

const { REACT_APP_TS, REACT_APP_API_KEY, REACT_APP_HASH } = process.env;

function getAllCharacters() {
    return api.get(`/characters?ts=${REACT_APP_TS}&apikey=${REACT_APP_API_KEY}&hash=${REACT_APP_HASH}`);
}

export default { getAllCharacters };