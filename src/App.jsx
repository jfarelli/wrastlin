import useWrestlerSelect from '../src/hooks/useWrestlerSelect';
import useDropDownSelections from './hooks/useDropDownSelections';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import EnterTheRing from './components/EnterTheRing/EnterTheRing';
import MoveForm from './components/MoveForm/MoveForm';
import LetsRumble from './components/LetsRumble/LetsRumble';
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

	const [matchUp] = useWrestlerSelect(wrestlers);

	const [
		leftStrikeSelection,
		rightStrikeSelection,
		leftHoldSelection,
		rightHoldSelection,
		leftThrowSelection,
		rightThrowSelection,
		leftAerialSelection,
		rightAerialSelection,
		leftWrestlerStrike,
		rightWrestlerStrike,
		leftWrestlerHold,
		rightWrestlerHold,
		leftWrestlerThrow,
		rightWrestlerThrow,
		leftWrestlerAerial,
		rightWrestlerAerial,
	] = useDropDownSelections(moves);

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

	// const [strikeSelection, setStrikeSelection] = useState('');
	// const [holdSelection, setHoldSelection] = useState('');
	// const [throwSelection, setThrowSelection] = useState('');
	// const [aerialSelection, setAerialSelection] = useState('');

	// const setStrikeMoveSelection = (moveSelection) => {
	// 	const strikePick = moves.strikeMoves.find(
	// 		(move) => move.name === moveSelection
	// 	);
	// 	setStrikeSelection(strikePick);
	// 	console.log('STRIKE MOVE PARAMETER: ', moveSelection);
	// 	console.log('STRIKE MOVE SELECTION', strikePick);
	// };

	// const setHoldMoveSelection = (moveSelection) => {
	// 	const holdPick = moves.holdMoves.find(
	// 		(move) => move.name === moveSelection
	// 	);
	// 	setHoldSelection(holdPick);
	// 	console.log('HOLD MOVE PARAMETER: ', moveSelection);
	// 	console.log('HOLD MOVE SELECTION', holdPick);
	// };

	// const setThrowMoveSelection = (moveSelection) => {
	// 	const throwPick = moves.throwMoves.find(
	// 		(move) => move.name === moveSelection
	// 	);
	// 	setThrowSelection(throwPick);
	// 	console.log('THROW MOVE PARAMETER: ', moveSelection);
	// 	console.log('THROW MOVE SELECTION', throwPick);
	// };

	// const setAerialMoveSelection = (moveSelection) => {
	// 	const aerialPick = moves.aerialMoves.find(
	// 		(move) => move.name === moveSelection
	// 	);
	// 	setAerialSelection(aerialPick);
	// 	console.log('AERIAL MOVE PARAMETER: ', moveSelection);
	// 	console.log('AERIAL MOVE SELECTION', aerialPick);
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
								<EnterTheRing matchUp={matchUp} />
							</>
						)
					}
				/>
				<Route
					path="/lets-rumble"
					element={
						<>
							<Header />
							<LetsRumble
								matchUp={matchUp}
								moves={moves}
								leftStrikeSelection={leftStrikeSelection}
								rightStrikeSelection={rightStrikeSelection}
								leftHoldSelection={leftHoldSelection}
								rightHoldSelection={rightHoldSelection}
								leftThrowSelection={leftThrowSelection}
								rightThrowSelection={rightThrowSelection}
								leftAerialSelection={leftAerialSelection}
								rightAerialSelection={rightAerialSelection}
								leftWrestlerStrike={leftWrestlerStrike}
								rightWrestlerStrike={rightWrestlerStrike}
								leftWrestlerHold={leftWrestlerHold}
								rightWrestlerHold={rightWrestlerHold}
								leftWrestlerThrow={leftWrestlerThrow}
								rightWrestlerThrow={rightWrestlerThrow}
								leftWrestlerAerial={leftWrestlerAerial}
								rightWrestlerAerial={rightWrestlerAerial}
							/>
						</>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
