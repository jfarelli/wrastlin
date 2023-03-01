import './LandingPage.css';
import WWFLogo from '../../assets/wwf-logo.png';
import { Link } from 'react-router-dom';

const LandingPage = ({ getRandomWrestler, isButtonClicked }) => {
	return (
		<div className="landing-page-container">
			<img
				className="wwf-landing"
				src={WWFLogo}
				alt="Classic Worldwide Wrestling Federation Logo"
			/>
			<Link to="/enter-the-ring">
				<button
					onClick={getRandomWrestler}
					className="enter-button"
					disabled={isButtonClicked}
				>
					ENTER THE RING
				</button>
			</Link>
		</div>
	);
};

export default LandingPage;
