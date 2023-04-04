import WrestlingRing from '../../assets/wrestling-ring.jpeg';
import MoveForm from '../MoveForm/MoveForm';

const LetsRumble = ({
	matchUp,
	moves,
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
	return (
		<div>
			<div className="wrestling-ring-container">
				<div className="wrestling-ring-image-container">
					<img
						className="wrestling-ring-image"
						src={WrestlingRing}
						alt="wrestling-ring"
					/>
				</div>
				<MoveForm
					matchUp={matchUp}
					moves={moves}
					//////////////////////////////////////////////
					leftStrikeSelection={leftStrikeSelection}
					rightStrikeSelection={rightStrikeSelection}
					leftHoldSelection={leftHoldSelection}
					rightHoldSelection={rightHoldSelection}
					leftThrowSelection={leftThrowSelection}
					rightThrowSelection={rightThrowSelection}
					leftAerialSelection={leftAerialSelection}
					rightAerialSelection={rightAerialSelection}
					/////////////////////////////////////////////
					leftWrestlerStrike={leftWrestlerStrike}
					rightWrestlerStrike={rightWrestlerStrike}
					leftWrestlerHold={leftWrestlerHold}
					rightWrestlerHold={rightWrestlerHold}
					leftWrestlerThrow={leftWrestlerThrow}
					rightWrestlerThrow={rightWrestlerThrow}
					leftWrestlerAerial={leftWrestlerAerial}
					rightWrestlerAerial={rightWrestlerAerial}
				/>
				<div className="wrestlers-container">
					<div className="wrestler-left-container">
						<img
							className="wrestler-left"
							src={`http://localhost:8000/images/${matchUp[0].image}`}
							alt="wrestler"
						/>
					</div>
					<div className="wrestler-right-container">
						<img
							className="wrestler-right"
							src={`http://localhost:8000/images/${matchUp[1].image}`}
							alt="wrestler"
						/>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default LetsRumble;
