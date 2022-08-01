import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
import CharacterForm from '../shared/CharacterForm';
import messages from '../shared/AutoDismissAlert/messages'

const EditCharacterModal = (props) => {
    console.log('here are the props in the EditCharacterModal', props)
    // these props come from the parent component
    const { 
        user, 
        show, 
        handleClose, 
        updateCharacter, 
        msgAlert, 
        triggerRefresh, 
    } = props
    console.log('here is the user data', user)
    const [character, setCharacter] = useState(props.character)
    console.log('character in edit modal', character)
    const handleChange = (e) => {
        // we got this same function from create!
        setCharacter(prevCharacter => {
            let updatedValue = e.target.value;
            const updatedName = e.target.name;
            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }
            if (updatedName === "isADandy" && e.target.checked) {
                updatedValue = true
            } else if (updatedName === "isADandy" && !e.target.checked) {
                updatedValue = false
            }
            const updatedCharacter = {
                [updatedName]: updatedValue
            }
            return {
                ...prevCharacter, 
                ...updatedCharacter
            }
        })
    }
    const handleSubmit = (e) => {
        // this is where we put updatePet! We need (user, updatedPet)
        // once again, we get a similar function from createPet component
        e.preventDefault();
        // we want it to hit the updatePet function
        updateCharacter(character)
        // if we're successful in the modal, we want the modal to close
            .then(() => handleClose())
            .then(() =>
                msgAlert({
                    heading: 'Update Character Success',
                    message: messages.updateCharacterSuccess,
                    variant: 'success',
                })
            )
            // if successful, we need to trigger a refresh for the show page so we see the new information immediately
            // this refreshes the state of the pet component to the updated information!
            .then(()=> triggerRefresh())
            // this tells the user about an error
            .catch(msgAlert({
                heading: 'Update Character Error',
                message: messages.updateCharacterFailure,
                variant: 'danger',
            }))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <CharacterForm 
                    character={character}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update Character"
                />
            </Modal.Body>
        </Modal>
    );
}

export default EditCharacterModal;