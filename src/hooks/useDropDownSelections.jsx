import { useState } from 'react';

const useDropDownSelections = (moves) => {
	//////////////////////////////////// STRIKE MOVES ////////////////////////////////////
	const [leftStrikeSelection, setLeftStrikeSelection] = useState('');
	const [rightStrikeSelection, setRightStrikeSelection] = useState('');

	const leftWrestlerStrike = (moveSelection) => {
		const leftStrikePick = moves.strikeMoves.find(
			(move) => move.name === moveSelection
		);

		setLeftStrikeSelection(leftStrikePick);
	};

	const rightWrestlerStrike = (moveSelection) => {
		const rightStrikePick = moves.strikeMoves.find(
			(move) => move.name === moveSelection
		);

		setRightStrikeSelection(rightStrikePick);
	};

	//////////////////////////////////// HOLD MOVES ////////////////////////////////////
	const [leftHoldSelection, setLeftHoldSelection] = useState('');
	const [rightHoldSelection, setRightHoldSelection] = useState('');

	const leftWrestlerHold = (moveSelection) => {
		const leftHoldPick = moves.holdMoves.find(
			(move) => move.name === moveSelection
		);

		setLeftHoldSelection(leftHoldPick);
	};

	const rightWrestlerHold = (moveSelection) => {
		const rightHoldPick = moves.holdMoves.find(
			(move) => move.name === moveSelection
		);
		setRightHoldSelection(rightHoldPick);
	};

	////////////////////////////////////// THROW MOVES////////////////////////////////////
	const [leftThrowSelection, setLeftThrowSelection] = useState('');
	const [rightThrowSelection, setRightThrowSelection] = useState('');

	const leftWrestlerThrow = (moveSelection) => {
		const leftThrowPick = moves.throwMoves.find(
			(move) => move.name === moveSelection
		);

		setLeftThrowSelection(leftThrowPick);
	};

	const rightWrestlerThrow = (moveSelection) => {
		const rightThrowPick = moves.throwMoves.find(
			(move) => move.name === moveSelection
		);

		setRightThrowSelection(rightThrowPick);
	};

	///////////////////////////////////// AERIAL MOVES ////////////////////////////////////
	const [leftAerialSelection, setLeftAerialSelection] = useState('');
	const [rightAerialSelection, setRightAerialSelection] = useState('');

	const leftWrestlerAerial = (moveSelection) => {
		const leftAerialPick = moves.aerialMoves.find(
			(move) => move.name === moveSelection
		);
		setLeftAerialSelection(leftAerialPick);
	};

	const rightWrestlerAerial = (moveSelection) => {
		const rightAerialPick = moves.aerialMoves.find(
			(move) => move.name === moveSelection
		);

		setRightAerialSelection(rightAerialPick);
	};

	return [
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
	];
};

export default useDropDownSelections;



// import { useReducer } from 'react';

// const initialState = {
// 	strikeSelections: { left: '', right: '' },
// 	holdSelections: { left: '', right: '' },
// 	throwSelections: { left: '', right: '' },
// 	aerialSelections: { left: '', right: '' },
// };

// const reducer = (state, action) => {
// 	console.log('STATE: ', state);
// 	console.log('ACTION: ', action);
// 	switch (action.type) {
// 		case 'UPDATE_SELECTION':
// 			return {
// 				...state,
// 				[action.moveType]: {
// 					...state[action.moveType],
// 					[action.selectionType]: action.selection,
// 				},
// 			};
// 		default:
// 			return state;
// 	}
// };

// const useDropDownSelections = (moves) => {
// 	const [state, dispatch] = useReducer(reducer, initialState);

// 	const updateSelection = (moveType, selectionType, moveSelection) => {
// 		const move = moves[`${moveType}Moves`].find(
// 			(move) => move.name === moveSelection
// 		);
// 		dispatch({
// 			type: 'UPDATE_SELECTION',
// 			moveType,
// 			selectionType,
// 			selection: move,
// 		});
// 	};

// 	return [
// 		state.strikeSelections.left,
// 		state.strikeSelections.right,
// 		state.holdSelections.left,
// 		state.holdSelections.right,
// 		state.throwSelections.left,
// 		state.throwSelections.right,
// 		state.aerialSelections.left,
// 		state.aerialSelections.right,
// 		(moveSelection) => updateSelection('strike', 'left', moveSelection),
// 		(moveSelection) => updateSelection('strike', 'right', moveSelection),
// 		(moveSelection) => updateSelection('hold', 'left', moveSelection),
// 		(moveSelection) => updateSelection('hold', 'right', moveSelection),
// 		(moveSelection) => updateSelection('throw', 'left', moveSelection),
// 		(moveSelection) => updateSelection('throw', 'right', moveSelection),
// 		(moveSelection) => updateSelection('aerial', 'left', moveSelection),
// 		(moveSelection) => updateSelection('aerial', 'right', moveSelection),
// 	];
// };
// export default useDropDownSelections;
