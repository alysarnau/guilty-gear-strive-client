import { useState } from 'react'
import CharacterForm from '../shared/CharacterForm'
import { createCharacter } from '../../api/characters';
import { useNavigate } from 'react-router-dom';
import messages from '../shared/AutoDismissAlert/messages'

const CreateCharacter = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()
    const [character, setCharacter] = useState({
        name: '',
        race: '',
        age: '',
        origin: '',
        eyeColor: '',
        bloodType: '',
        height: '',
        weight: '',
        isADandy: false,
    })
    // this will handle typing in the form!
    const handleChange = (e) => {
        setCharacter(prevCharacter => {
            const updatedValue = e.target.value;
            const updatedName = e.target.name;
            if (e.target.type === 'number') {
                // this is looking at the input type and changing it from the default, which is a string, into an actual number
                updatedValue = parseInt(e.target.value)
            }
            // this handles the checkbox, changing it on true etc
            if (updatedName === "isADandy" && e.target.checked) {
                updatedValue = true
            } else if (updatedName === "isADandy" && !e.target.checked) {
                updatedValue = false
            }
            const updatedCharacter = {
                [updatedName]: updatedValue
            }
            return {
                // we can spread out the previous object
                ...prevCharacter, 
                // AND the new one!
                // this will overwrite the stuff that changes in the previous state WHILE STILL keeping the new stuff!
                ...updatedCharacter
                
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // we want it to hit the createCharacter function
        createCharacter(user, character)
        // if successful, navigate to the show page for the new pet
            .then((res) => { navigate(`/characters/${res.data.character.id}`)})
        // send a success message to the user
            .then(() =>
                msgAlert({
                    heading: 'Create Character Success',
                    message: messages.createPetSuccess,
                    variant: 'success',
                })
            )
            .catch(msgAlert({
                heading: 'Create Character Error',
                message: messages.createPetFailure,
                variant: 'danger',
            }))
    }
    return (
        <>
            <h1><span className="heavenOrHell">HEAVEN OR HELL...FIGHT!</span></h1>
            <CharacterForm 
                character={ character } 
                handleChange={ handleChange }
                handleSubmit = { handleSubmit } 
                user={user}
                header="Create a Character"
            />
        </>
    );
}

export default CreateCharacter;
