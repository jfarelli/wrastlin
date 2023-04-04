import './MoveForm.css';

const MoveForm = ({
	moves,
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
}) => {
	function capitalizeWords(str) {
		return str.replace(/\b\w/g, function (l) {
			return l.toUpperCase();
		});
	}

	console.log('LEFT STRIKE MOVE SELECTION', leftStrikeSelection);
	console.log('RIGHT STRIKE MOVE SELECTION', rightStrikeSelection);
	console.log('LEFT HOLD MOVE SELECTION', leftHoldSelection);
	console.log('RIGHT HOLD MOVE SELECTION', rightHoldSelection);
	console.log('LEFT THROW MOVE SELECTION', leftThrowSelection);
	console.log('RIGHT THROW MOVE SELECTION', rightThrowSelection);
	console.log('LEFT AERIAL MOVE SELECTION', leftAerialSelection);
	console.log('RIGHT AERIAL MOVE SELECTION', rightAerialSelection);

	// function handleLeftStrikeSelection(e) {
	// 	e.preventDefault();
	// 	setStrikeMoveSelection(e.target.value);
	// }

	// function handleHoldSelection(e) {
	// 	e.preventDefault();
	// 	setHoldMoveSelection(e.target.value);
	// }

	// function handleThrowSelection(e) {
	// 	e.preventDefault();
	// 	setThrowMoveSelection(e.target.value);
	// }

	// function handleAerialSelection(e) {
	// 	e.preventDefault();
	// 	setAerialMoveSelection(e.target.value);
	// }

	function sortNames(moveType) {
		const sortedMoves = moveType.sort((a, b) => {
			let nameA = a.name.toUpperCase();
			let nameB = b.name.toUpperCase();

			if (nameA < nameB) {
				return -1;
			}

			if (nameA > nameB) {
				return 1;
			}

			return 0;
		});
		return sortedMoves;
	}

	const strikeMoves = sortNames(moves.strikeMoves).map((strikeMove) => {
		return (
			<option
				key={strikeMove.name}
				id={strikeMove.name}
				value={strikeMove.name}
			>
				{capitalizeWords(strikeMove.name)}
			</option>
		);
	});

	const holdMoves = sortNames(moves.holdMoves).map((holdMove) => {
		return (
			<option key={holdMove.name} id={holdMove.name} value={holdMove.name}>
				{capitalizeWords(holdMove.name)}
			</option>
		);
	});

	const throwMoves = sortNames(moves.throwMoves).map((throwMove) => {
		return (
			<option key={throwMove.name} id={throwMove.name} value={throwMove.name}>
				{capitalizeWords(throwMove.name)}
			</option>
		);
	});

	const aerialMoves = sortNames(moves.aerialMoves).map((aerialMove) => {
		return (
			<option
				key={aerialMove.name}
				id={aerialMove.name}
				value={aerialMove.name}
			>
				{capitalizeWords(aerialMove.name)}
			</option>
		);
	});

	return (
		<div className="move-form">
			<div className="dropdown-container">
				<form>
					<select onClick={(e) => leftWrestlerStrike(e.target.value)}>
						<option value="">Strike Move</option>
						{strikeMoves}
					</select>
					<select onClick={(e) => leftWrestlerHold(e.target.value)}>
						<option value="">Hold Move</option>
						{holdMoves}
					</select>
					<select onClick={(e) => leftWrestlerThrow(e.target.value)}>
						<option value="">Throw Move</option>
						{throwMoves}
					</select>
					<select onClick={(e) => leftWrestlerAerial(e.target.value)}>
						<option value="">Aerial Move</option>
						{aerialMoves}
					</select>
				</form>
				<form>
					<select onClick={(e) => rightWrestlerStrike(e.target.value)}>
						<option value="">Strike Move</option>
						{strikeMoves}
					</select>
					<select onClick={(e) => rightWrestlerHold(e.target.value)}>
						<option value="">Hold Move</option>
						{holdMoves}
					</select>
					<select onClick={(e) => rightWrestlerThrow(e.target.value)}>
						<option value="">Throw Move</option>
						{throwMoves}
					</select>
					<select onClick={(e) => rightWrestlerAerial(e.target.value)}>
						<option value="">Aerial Move</option>
						{aerialMoves}
					</select>
				</form>
			</div>
			<div className="winner-container" hidden>
				<h2>Blank Wins</h2>
			</div>
		</div>
	);
};

export default MoveForm;
