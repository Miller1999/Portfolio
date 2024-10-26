import Logo from "../../assets/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import "./Header.sass";
import { Fragment } from "react";

const Header = () => {
	return (
		<Fragment>
			<header>
				<img src={Logo} alt="Miller Arias Dev" />
				<p>Miller Arias Dev</p>
				<button>
					<CiMenuBurger />
				</button>
			</header>
		</Fragment>
	);
};

export default Header;
