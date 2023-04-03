import './Header.css';
import WWFLogo from '../../assets/wwf-logo.png';
import HulkHogan from '../../assets/hulk-hogan.png';
import MachoMan from '../../assets/macho-man.png';
import UltimateWarrior from '../../assets/ultimate-warrior.png';
import Undertaker from '../../assets/undertaker.png';
import JakeTheSnake from '../../assets/jake-the-snake.png'

const Header = () => {
	return (
		<header>
			<div className="wrestler-container-left">
				<img className="wrestler" src={JakeTheSnake} alt="Jake The Snake Roberts" />
				<img className="wrestler" src={Undertaker} alt="The Undertaker" />
				<img
					className="wrestler"
					src={UltimateWarrior}
					alt="The Ultimate Warrior"
				/>
				<img className="wrestler" src={MachoMan} alt="Macho Man Randy Savage" />
                <img className="wrestler" src={HulkHogan} alt="Hulk Hogan" />
			</div>
			<img
				className="wwf-logo"
				src={WWFLogo}
				alt="Classic Worldwide Wrestling Federation Logo"
			/>
			<div className="wrestler-container-right">
				<img className="wrestler" src={JakeTheSnake} alt="Jake The Snake Roberts" />
				<img className="wrestler" src={Undertaker} alt="The Undertaker" />
				<img
					className="wrestler"
					src={UltimateWarrior}
					alt="The Ultimate Warrior"
				/>
				<img className="wrestler" src={MachoMan} alt="Macho Man Randy Savage" />
                <img className="wrestler" src={HulkHogan} alt="Hulk Hogan" />
			</div>
		</header>
	);
};

export default Header;
