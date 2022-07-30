import apiUrl from "../apiConfig";
import axios from "axios";

export const getAllCharacters = () => {
    return axios(`${apiUrl}/characters`);
}

export const getOneCharacter = (id) => {
    return axios(`${apiUrl}/characters/${id}`)
}