import React from 'react';
import { 
    Container,
    Card 
} from 'react-bootstrap';
import LoadingScreen from '../shared/LoadingScreen';
// import getOnePet function
import { getOneCharacter } from '../../api/characters';
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

const ShowCharacter = (props) => {
    const [character, setCharacter] = useState(null)

    // destructuring to get the id value from our route params
    const { id } = useParams();
    const navigate = useNavigate()
    // useNav returns a function
    // we can call that function to redirect the user wherever we want to

    const { msgAlert } = props;
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
    }, [])
    // If character hasn't been loaded yet, show a loading message
    if (!character) {
        return <LoadingScreen />
    }
    
    return (
        <Container className='fluid'>
            <Card>
                <Card.Header>{ character.name }</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div><small>Race: { character.race }</small></div>
                        <div><small>Age: { character.age ? character.age : 'unknown'}</small></div>
                        <div><small>Origin: { character.origin }</small></div>
                        <div><small>Eye Color: { character.eyeColor }</small></div>
                        <div><small>Blood Type: { character.bloodType }</small></div>
                        <div><small>Height: { character.height } cm</small></div>
                        <div><small>Weight: { character.weight } kg</small></div>
                        <div><small>Height: { character.height } cm</small></div>
                        <div><small>
                            Are They a Dandy?: { character.isADandy ? 'yes' : 'no'}
                        </small></div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ShowCharacter;
