import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import EnterTheRing from './components/EnterTheRing/EnterTheRing';
import LoadingPage from './components/LoadingPage/LoadingPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from '../apiCalls';
import './App.css';
import './fonts/WRESTLEMANIA.ttf';

const App = () => {
	const [wrestlers, setWrestlers] = useState([]);
	const [moves, setMoves] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetchData()
			.then(({ data }) => {
				const { wrestlers, moves } = data;
				setWrestlers(wrestlers);
				setMoves(moves[0]);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	// Let's start by getting a random wrestler for the left and right hand side of the ring
	// clicking the 'Enter the ring' button takes you to <EnterTheRing />
	// The display should be a random left and right wrestler
	// Top name should match the left and vise-versa

	// function getRandomWrestlers() {
	// 	let wrestlerNames = wrestlers.map((wrestler) => wrestler.name);

	// 	return wrestlerNames[
	// 		Math.floor(Math.random(wrestlerNames) * wrestlerNames.length)
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
				<Route path="/" element={<LandingPage />} />
				<Route
					path="/enter-the-ring"
					element={
						loading ? (
							<LoadingPage />
						) : (
							<>
								<Header />
								<EnterTheRing wrestlers={wrestlers} moves={moves} />
							</>
						)
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
