import WrestlingRing from '../../assets/wrestling-ring.jpeg';
import MoveForm from '../MoveForm/MoveForm';

const LetsRumble = ({matchUp, moves}) => {
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
                <MoveForm moves={moves}/>
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
