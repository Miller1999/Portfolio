//Assets
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
				<img src={Logo} alt="Miller Arias Dev" />
			</div>
			<div className="container--buttons">
				<button onClick={toggleTheme}>
					<img
						className="icon"
						src="https://www.svgrepo.com/show/532875/moon.svg"
					/>

					<img
						className="icon hidden"
						src="https://www.svgrepo.com/show/532889/sun.svg"
					/>
				</button>
				<button
					onClick={() => {
						setShowNav(!showNav);
						setShowHome(!showHome);
					}}
				>
					<Hamburguer />
				</button>
			</div>
		</header>
	);
};

export default Header;
