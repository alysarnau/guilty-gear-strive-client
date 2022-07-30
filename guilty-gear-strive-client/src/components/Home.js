import CharactersIndex from "./characters/CharactersIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const { msgAlert } = props
	return (
		<>
			<h2>Home Page</h2>
			<CharactersIndex
				msgAlert={ msgAlert }
			/>
		</>
	)
}

export default Home
