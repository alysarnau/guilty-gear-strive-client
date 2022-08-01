import {
    Form,
    Button,
    Container
} from 'react-bootstrap'

// character model fields:
// name: '', k
// race: '',k
// age: '',k
// origin: '',k 
// eyeColor: '',
// bloodType: '',
// height: '',
// weight: '',
// isADandy: boolean, k

const CharacterForm = (props) => {
    const { character, handleChange, handleSubmit, header } = props
    console.log('here is the character from props in the Character Form', character)

    return (
        <Container className="justify-content-center">
            <h3>{header}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor='name'>Character Name</Form.Label>
                <Form.Control 
                    name="name" 
                    id="name" 
                    type="text" 
                    placeholder="Enter Character Name"
                    value={ character.name }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor='race'>Character Race</Form.Label>
                <Form.Control 
                    name="race" 
                    id="race" 
                    type="text" 
                    placeholder="Enter Character Race"
                    value={ character.race }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor='age'>Character Age (if unknown, type 'unknown')</Form.Label>
                <Form.Control 
                    name="age" 
                    id="age" 
                    type="number" 
                    placeholder="Enter Character Age"
                    value={ character.age }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor='origin'>Character Origin</Form.Label>
                <Form.Control 
                    name="origin" 
                    id="origin" 
                    type="text" 
                    placeholder="Enter Character Origin"
                    value={ character.origin }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor='eyeColor'>Character Eye Color</Form.Label>
                <Form.Control 
                    name="eyeColor" 
                    id="eyeColor" 
                    type="text" 
                    placeholder="Enter Character Eye Color"
                    value={ character.eyeColor }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor='bloodType'>Character Blood Type</Form.Label>
                <Form.Control 
                    name="bloodType" 
                    id="bloodType" 
                    type="text" 
                    placeholder="Enter Character's Blood Type"
                    value={ character.bloodType }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor='height'>Character Height (in cm)</Form.Label>
                <Form.Control 
                    name="height" 
                    id="height" 
                    type="number" 
                    placeholder="Enter Character's Height"
                    value={ character.height }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor='weight'>Character Weight (in kg)</Form.Label>
                <Form.Control 
                    name="weight" 
                    id="weight" 
                    type="number" 
                    placeholder="Enter Character's Weight"
                    value={ character.weight }
                    onChange={ handleChange }
                />
                <Form.Check
                    label="Is this character a Dandy?" 
                    id="isADandy" 
                    name="isADandy"
                    defaultChecked={ character.isADandy }
                    onChange={ handleChange }
                />
                <Button 
                    variant="primary" 
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default CharacterForm;
