import React from 'react';
import {
    Form,
    Button
} from 'react-bootstrap'
import { deleteCharacter } from '../../api/characters';
import messages from '../shared/AutoDismissAlert/messages';
import { 
    useParams,
    useNavigate 
} from 'react-router-dom';

const DeleteCharacter = (props) => {
    const { character } = props
    const { id } = useParams();
    const navigate = useNavigate()
    console.log('character', character)
    const onDelete = (e) => {
        e.preventDefault()
        const { msgAlert } = props;
        // const characterId = character._id
        
        deleteCharacter(character)
            .then(res => console.log(res))
            .then(() => {
                msgAlert({
					heading: 'Delete Character Success',
					message: messages.deleteCharacterSuccess,
					variant: 'success',
				})
            })
            .then(() => navigate('/'))
            .catch((error) => {
				msgAlert({
					heading: 'Delete character failed with error: ' + error.message,
					message: messages.deleteCharacterFailure,
					variant: 'danger',
				})
			})
        }
    return (
        <>
            <Form onSubmit={onDelete}>
                <Button 
                    variant="danger" 
                    type="submit"
                >
                    Delete Character?
                </Button>
            </Form>
        </>
    );
}

export default DeleteCharacter;
