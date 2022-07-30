import apiUrl from "../apiConfig";
import axios from "axios";

export const getAllCharacters = () => {
    return axios(`${apiUrl}/characters`);
}

export const getOneCharacter = (id) => {
    return axios(`${apiUrl}/characters/${id}`)
}

export const createCharacter = (character) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/characters',
		data: {
			character: {
				name: character.name,
				race: character.race,
				age: character.age,
                origin: character.origin,
                eyeColor: character.eyeColor,
                bloodType: character.bloodType,
                height: character.height,
                weight: character.weight,
                isADandy: character.isADandy,
			},
		},
	})
}