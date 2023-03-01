import './EnterTheRing.css';
import HulkHogan from '../../assets/hulk-hogan.png';
import Undertaker from '../../assets/undertaker.png';
import WrestlingRing from '../../assets/wrestling-ring.jpeg';
// import MachoMan from '../../assets/macho-man.png';
// import UltimateWarrior from '../../assets/ultimate-warrior.png';

// const Ring = ({ wrestlerLeft, wrestlerRight }) => {
const Ring = ({ wrestlers, moves }) => {
	console.log('WRESTLERS: ', wrestlers);
	console.log('MOVES: ', moves);
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
						{/* <h2>{wrestlerLeft}</h2> */}
                        <h2>Hulk Hogan</h2>
						<p>VS.</p>
                        <h2>The Undertaker</h2>
						{/* <h2>{wrestlerRight}</h2> */}
					</div>
				</div>
				<button className="rumble-button">RUMBLE!</button>
			</div>
			<div className="wrestlers-container">
				<div className="wrestler-left-container">
					<img className="wrestlers" src={HulkHogan} alt="wrestler" />
				</div>
				<div className="wrestler-right-container">
					<img className="wrestlers" src={Undertaker} alt="wrestler" />
				</div>
			</div>
		</div>
	);
};

export default Ring;
