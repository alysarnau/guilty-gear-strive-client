import { useState } from 'react'
import CharacterForm from '../shared/CharacterForm';

const CreateCharacter = (props) => {
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
    const { msgAlert, user } = props
    return (
        <div>
            <h1><span class="heavenOrHell">HEAVEN OR HELL...FIGHT!</span></h1>
            <h3>New Character Creation:</h3>
            <CharacterForm character={ character } handleChange={ handleChange } msgAlert={msgAlert} user={user}/>
        </div>
    );
}

export default CreateCharacter;
