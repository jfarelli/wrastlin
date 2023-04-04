import { useEffect, useState } from 'react';

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

    // useEffect(() => {
    //     setRightAerialSelection(rightAerialPick);
    // }, [])

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
