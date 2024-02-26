//Assets
import Logo from "../../assets/images/logo.webp";
import Hamburguer from "../hamburguer/hamburguer";
//Styles
import "./header.sass";
//Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Header = () => {
	return (
		<header>
			<div className="logo">
				<img src={Logo} alt="Miller Arias Dev" />
			</div>
			<div className="container--buttons">
				<button>
					<LightModeOutlinedIcon className="icon hidden" fontSize="small" />
					<DarkModeOutlinedIcon className="icon" fontSize="small" />
				</button>
				<button>
					<Hamburguer />
				</button>
			</div>
		</header>
	);
};

export default Header;
