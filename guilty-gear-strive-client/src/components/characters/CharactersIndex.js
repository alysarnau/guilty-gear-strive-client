import { 
    useState, 
    useEffect 
} from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getAllCharacters } from '../../api/characters'
import messages from '../shared/AutoDismissAlert/messages'

// CharactersIndex should make a request to the api
// To get all characters
// Then display them when it gets them

// style for our card container
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const CharactersIndex = (props) => {
    const [characters, setCharacters] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    console.log('Props in CharactersIndex', props)

    useEffect(() => {
        console.log(props)
        getAllCharacters()
            .then(res => setCharacters(res.data.characters))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Characters',
                    message: messages.getCharactersFailure,
                    variant: 'danger',
                })
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error!</p>
    }

    // If characters haven't been loaded yet, show a loading message
    if (!characters) {
        return <LoadingScreen />
    } else if (characters.length === 0) {
        return <p>No characters yet. Better add some.</p>
    }

    const characterCards = characters.map(character => (
        <Card style={{ width: '30%', margin: 5}} key={ character.id }>
            <Card.Header>{ character.name }</Card.Header>
            <Card.Body>
                <Card.Text>
                    {/* TODO: THIS NEEDS TO BE SET UP */}
                    <Link to={`/characters/${character.id}`}>View { character.name }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <div style={ cardContainerStyle }>
            { characterCards }
        </div>
    )
}

export default CharactersIndex