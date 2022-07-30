import CharactersIndex from "./characters/CharactersIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const { msgAlert } = props
	return (
		<>	
			<h1 class="heavenOrHell">Character Roster</h1>
			<h2>“Mankind knew they cannot change society. So instead of reflecting on themselves, they blamed the Beasts.”</h2>
			<CharactersIndex
				msgAlert={ msgAlert }
			/>
		</>
	)
}

export default Home
