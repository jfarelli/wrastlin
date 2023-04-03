import './MoveForm.css';

const MoveForm = ({ moves }) => {
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
				// onClick={(e) => handleMovieChange(e.target.value)}
			>
				{strikeMove.name}
			</option>
		);
	});

	const holdMoves = sortNames(moves.holdMoves).map((holdMove) => {
		return (
			<option
				key={holdMove.name}
				id={holdMove.name}
				value={holdMove.name}
				// onClick={(e) => handleMovieChange(e.target.value)}
			>
				{holdMove.name}
			</option>
		);
	});

	const throwMoves = sortNames(moves.throwMoves).map((throwMove) => {
		return (
			<option
				key={throwMove.name}
				id={throwMove.name}
				value={throwMove.name}
				// onClick={(e) => handleMovieChange(e.target.value)}
			>
				{throwMove.name}
			</option>
		);
	});

	const aerialMoves = sortNames(moves.aerialMoves).map((aerialMove) => {
		return (
			<option
				key={aerialMove.name}
				id={aerialMove.name}
				value={aerialMove.name}
				// onClick={(e) => handleMovieChange(e.target.value)}
			>
				{aerialMove.name}
			</option>
		);
	});

	return (
		<div className="move-form">
			<div className="dropdown-container">
				<form>
					<select>
						<option value="">Strike Move</option>
						{strikeMoves}
					</select>
					<select>
						<option value="">Hold Move</option>
						{holdMoves}
					</select>
					<select>
						<option value="">Throw Move</option>
						{throwMoves}
					</select>
					<select>
						<option value="">Aerial Move</option>
						{aerialMoves}
					</select>
				</form>
				<form>
					<select>
						<option value="">Strike Move</option>
						{strikeMoves}
					</select>
					<select>
						<option value="">Hold Move</option>
						{holdMoves}
					</select>
					<select>
						<option value="">Throw Move</option>
						{throwMoves}
					</select>
					<select>
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
