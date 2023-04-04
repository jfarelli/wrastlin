import './MoveForm.css';

const MoveForm = ({
	moves,
	matchUp,
	///////////////////////////
	leftStrikeSelection,
	rightStrikeSelection,
	leftHoldSelection,
	rightHoldSelection,
	leftThrowSelection,
	rightThrowSelection,
	leftAerialSelection,
	rightAerialSelection,
	///////////////////////////
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

	const changeBackgroundColor = (e) => {
		e.target.style.backgroundColor = '#f3df15';
	};

	const selectedElement = document.querySelectorAll('select');

	for (let i = 0; i < selectedElement.length; i++) {
		selectedElement[i].addEventListener('change', changeBackgroundColor);
	}

	return (
		<div className="move-form">
			<div className="dropdown-container">
				<form>
					<select onChange={(e) => leftWrestlerStrike(e.target.value)}>
						<option value="" onChange={(e) => changeBackgroundColor}>
							Strike Move
						</option>
						{strikeMoves}
					</select>
					{leftStrikeSelection && rightStrikeSelection ? (
						<select onChange={(e) => leftWrestlerHold(e.target.value)}>
							<option value="" onChange={changeBackgroundColor}>
								Hold Move
							</option>
							{holdMoves}
						</select>
					) : (
						''
					)}

					{leftHoldSelection && rightHoldSelection ? (
						<select onChange={(e) => leftWrestlerThrow(e.target.value)}>
							<option value="" onChange={changeBackgroundColor}>
								Throw Move
							</option>
							{throwMoves}
						</select>
					) : (
						''
					)}

					{leftThrowSelection && rightThrowSelection ? (
						<select onChange={(e) => leftWrestlerAerial(e.target.value)}>
							<option value="" onChange={changeBackgroundColor}>
								Aerial Move
							</option>
							{aerialMoves}
						</select>
					) : (
						''
					)}
				</form>
				<form>
					<select onChange={(e) => rightWrestlerStrike(e.target.value)}>
						<option value="" onChange={changeBackgroundColor}>
							Strike Move
						</option>
						{strikeMoves}
					</select>
					{leftStrikeSelection && rightStrikeSelection ? (
						<select onChange={(e) => rightWrestlerHold(e.target.value)}>
							<option value="" onChange={changeBackgroundColor}>
								Hold Move
							</option>
							{holdMoves}
						</select>
					) : (
						''
					)}

					{leftHoldSelection && rightHoldSelection ? (
						<select onChange={(e) => rightWrestlerThrow(e.target.value)}>
							<option value="" onChange={changeBackgroundColor}>
								Throw Move
							</option>
							{throwMoves}
						</select>
					) : (
						''
					)}

					{leftThrowSelection && rightThrowSelection ? (
						<select onChange={(e) => rightWrestlerAerial(e.target.value)}>
							<option value="" onChange={changeBackgroundColor}>
								Aerial Move
							</option>
							{aerialMoves}
						</select>
					) : (
						''
					)}
				</form>
			</div>
			{leftAerialSelection && rightAerialSelection ? (
				<div className="winner-container">
					<h2>`${matchUp[0].name}` Wins</h2>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default MoveForm;
