import Logo from "../assets/images/logo.webp";
import "./header.sass";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const Header = () => {
	return (
		<header>
			<div className="logo">
				<img src={Logo} alt="Miller Arias Dev" />
			</div>
			<div className="container--buttons">
				<button>
					<LightModeOutlinedIcon fontSize="small" />
				</button>
				<button>Menu</button>
			</div>
		</header>
	);
};

export default Header;
