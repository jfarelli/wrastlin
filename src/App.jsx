import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import EnterTheRing from './components/EnterTheRing/EnterTheRing';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from '../apiCalls';
import './App.css'

const App = () => {
	const [wrestlers, setWrestlers] = useState();
	const [moves, setMoves] = useState();

	useEffect(() => {
		fetchData().then(({ data }) => {
			const { wrestlers, moves } = data;
			setWrestlers(wrestlers);
			setMoves(moves[0]);
		});
	}, []);

	// function getRandomWrestlers() {
	// 	let wrestlerNames = wrestlers.map((wrestler) => wrestler.name);

	// 	return wrestlerNames[
	// 		Math.floor(Math.random(wrestlerNames) * wrestlerNames.length)
	// 	];
	// }

	// function getRandomWrestlers() {
	// 	return wrestlers[
	// 		Math.floor(Math.random() * wrestlers.length)
	// 	];
	// }

	// const handleRandomWrestlers = () => {
	// 	while (wrestlerLeft === wrestlerRight) {
	// 		setWrestlerRight(getRandomWrestlers());
	// 	}
	// 	setIsButtonClicked(true);
	// };

	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<LandingPage
						// handleRandomWrestlers={handleRandomWrestlers}
						// isButtonClicked={isButtonClicked}
						/>
					}
				/>
				<Route
					path="/enter-the-ring"
					element={
						<>
							<Header />
							<EnterTheRing
								// wrestlerLeft={wrestlerLeft}
								// wrestlerRight={wrestlerRight}
								wrestlers={wrestlers}
								moves={moves}
							/>
						</>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
