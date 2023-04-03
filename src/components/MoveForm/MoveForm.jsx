import './MoveForm.css';

const MoveForm = ({ moves }) => {
	const strikeMovesDropDown = moves.strikeMoves.map((strikeMove) => {
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

	const holdMovesDropDown = moves.holdMoves.map((holdMove) => {
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

	const throwMovesDropDown = moves.throwMoves.map((throwMove) => {
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

	const aerialMovesDropDown = moves.aerialMoves.map((aerialMove) => {
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
						{strikeMovesDropDown}
					</select>
					<select>
						<option value="">Hold Move</option>
						{holdMovesDropDown}
					</select>
					<select>
						<option value="">Throw Move</option>
						{throwMovesDropDown}
					</select>
					<select>
						<option value="">Aerial Move</option>
						{aerialMovesDropDown}
					</select>
				</form>
				<form>
					<select>
						<option value="">Strike Move</option>
						{strikeMovesDropDown}
					</select>
					<select>
						<option value="">Hold Move</option>
						{holdMovesDropDown}
					</select>
					<select>
						<option value="">Throw Move</option>
						{throwMovesDropDown}
					</select>
					<select>
						<option value="">Aerial Move</option>
						{aerialMovesDropDown}
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
