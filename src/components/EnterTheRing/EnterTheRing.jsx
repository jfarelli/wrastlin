import './EnterTheRing.css';
import HulkHogan from '../../assets/hulk-hogan.png';
import Undertaker from '../../assets/undertaker.png';
import WrestlingRing from '../../assets/wrestling-ring.jpeg';
import { useState } from 'react';
import useWrestlerSelect from '../../hooks/useWrestlerSelect';

const Ring = ({ wrestlers, moves }) => {
	// console.log('MOVES: ', moves);

	const [matchUp] = useWrestlerSelect(wrestlers);
	console.log('MATCHUP: ', matchUp);

	return (
		<div className="wrestling-ring-container">
			<div className="wrestling-ring-image-container">
				<img
					className="wrestling-ring-image"
					src={WrestlingRing}
					alt="wrestling-ring"
				/>
			</div>
			<div className="text-and-button-container">
				<div className="textbox-container">
					<div className="textbox">
						<h2 className="top-wrestler-name">{matchUp[0].name}</h2>
						<p>VS.</p>
						<h2 className="bottom-wrestler-name">{matchUp[1].name}</h2>
					</div>
				</div>
				<button className="rumble-button">RUMBLE</button>
			</div>
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
		</div>
	);
};

export default Ring;
