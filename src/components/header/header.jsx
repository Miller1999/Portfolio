//Assets
import Logo from "../../assets/images/logo.webp";
import Hamburguer from "../hamburguer/hamburguer";
//Styles
import "./header.sass";
//Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link } from "react-router-dom";

const Header = ({ setShowNav, showNav, setShowHome, showHome }) => {
	return (
		<header>
			<div className="logo">
				<Link to="/">
					<img src={Logo} alt="Miller Arias Dev" />
				</Link>
			</div>
			<div className="container--buttons">
				<button>
					<LightModeOutlinedIcon className="icon hidden" fontSize="small" />
					<DarkModeOutlinedIcon className="icon" fontSize="small" />
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
