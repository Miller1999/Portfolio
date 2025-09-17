//Assets
import { Link } from "react-router-dom";
import { useTheme } from "../../App";
import Logo from "../../assets/images/logo.webp";
import Hamburguer from "../hamburguer/hamburguer";
//Styles
import "./header.sass";
//Icons

const Header = ({ setShowNav, showNav, setShowHome, showHome }) => {
	const { theme, setTheme } = useTheme();
	const toggleTheme = (e) => {
		if (e.target.nextSibling === null) {
			e.target.previousSibling.classList.toggle("hidden");
			e.target.classList.toggle("hidden");
		} else {
			e.target.nextSibling.classList.toggle("hidden");
			e.target.classList.toggle("hidden");
		}

		setTheme((prevTheme) => !prevTheme);
	};
	return (
		<header className={` ${theme ? "light" : "dark"}`}>
			<div className="logo">
				<Link
					to="/"
					onClick={() => {
						setShowNav(false);
						setShowHome(true);
					}}
				>
					<img src={Logo} alt="Miller Arias Dev" />
				</Link>
			</div>
			<div className="right-header">
				<div className="container--buttons">
					<button onClick={toggleTheme} aria-label="theme button">
						<img
							className="icon"
							src="https://www.svgrepo.com/show/532875/moon.svg"
							alt="dark mode"
						/>

						<img
							className="icon hidden"
							src="https://www.svgrepo.com/show/532889/sun.svg"
							alt="light mode"
						/>
					</button>
					<button
						aria-label="menu button"
						onClick={() => {
							setShowNav(!showNav);
							setShowHome(!showHome);
						}}
					>
						<Hamburguer />
					</button>
				</div>
				<div className="helper">
					<span>Click me</span>
					<img
						className="icon-out icon"
						src="https://www.svgrepo.com/show/535180/arrow-turn-right-up.svg"
						alt="help"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
