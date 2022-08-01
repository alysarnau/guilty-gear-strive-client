import React from 'react';
import { 
    Container,
    Card,
    Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen';
// import character route functions
import { updateCharacter, removeCharacter, getOneCharacter } from '../../api/characters'
// this will allow us to set our params
import { 
    useParams,
    useNavigate 
} from 'react-router-dom';
// useNav will allow us to navigate to a specific page
// for error messages
import messages from '../shared/AutoDismissAlert/messages'
import { 
    useState, 
    useEffect 
} from 'react'
import EditCharacterModal from './EditCharacterModal'

const ShowCharacter = (props) => {
    const [character, setCharacter] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)
    // destructuring to get the id value from our route params
    const { id } = useParams();
    const navigate = useNavigate()
    // useNav returns a function
    // we can call that function to redirect the user wherever we want to

    const { user, msgAlert } = props;
    console.log('the character in props in show character', character)
    console.log('user in props', user)
    console.log('here is the user _id', user._id)
    useEffect(() => {
        getOneCharacter(id)
            .then(res => setCharacter(res.data.character))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting character',
                    body: messages.getCharactersFailure,
                    variant: 'danger',
                })
                // navigate back to the home page if there's an error fetching
                navigate('/');
            })
    }, [updated])
    // DEFEAT THE CHARACTER
    const removeTheCharacter = () => {
        removeCharacter(user, character.id)
            // on success send a success message
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeCharacterSuccess,
                    variant: 'success'
                })
            })
            // then navigate to index
            .then(() => {navigate('/')})
            // on failure send a failure message
            .catch(err => {                   
                msgAlert({
                    heading: 'Error removing pet',
                    message: messages.removeCharacterFailure,
                    variant: 'danger'
                })
            })
    }
    // If character hasn't been loaded yet, show a loading message
    if (!character) {
        return <LoadingScreen />
    }
    
    return (
        <>
            <Container className='fluid'>
                <Card>
                    <Card.Header>{ character.name }</Card.Header>
                    <Card.Body>
                        <Card.Text>
                                <div><small>Race: { character.race }</small></div>
                                <div><small>Age: { character.age ? character.age : 'Unknown'}</small></div>
                                <div><small>Origin: { character.origin }</small></div>
                                <div><small>Eye Color: { character.eyeColor }</small></div>
                                <div><small>Blood Type: { character.bloodType }</small></div>
                                <div><small>Height: { character.height } cm</small></div>
                                <div><small>Weight: { character.weight } kg</small></div>
                                <div><small>
                                    Are They a Dandy? { character.isADandy ? 'Yes' : 'No'}
                                </small></div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <>
                            <Button 
                                onClick={() => setEditModalShow(true)} 
                                className="m-2" 
                                variant="warning"
                            >
                                Edit Character
                            </Button> 
                            <Button 
                                onClick={() => removeTheCharacter()} 
                                className="m-2" 
                                variant="danger"
                            >
                                Defeat the Character
                            </Button> 
                        </>
                    </Card.Footer>
                </Card>
            </Container>
            <EditCharacterModal 
                user = {user}
                character = {character}
                show = {editModalShow}
                updateCharacter = {updateCharacter}
                msgAlert = {msgAlert}
                triggerRefresh  = {() => setUpdated(prev => !prev)}
                handleClose = {() => setEditModalShow((false))}
            />
        </>
    );
}

export default ShowCharacter;
