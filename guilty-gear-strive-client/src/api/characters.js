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

// UPDATE
export const updateCharacter = (user, updatedCharacter) => {
    console.log('this is updated pet', updatedCharacter)
	return axios({
		url: `${apiUrl}/characters/${updatedCharacter.id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { character: updatedCharacter } ,
	})
}

// DELETE
export const removeCharacter = (user, characterId) => {
    console.log('this is deleted character id', characterId)
	return axios({
		url: `${apiUrl}/characters/${characterId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		}
	})
}