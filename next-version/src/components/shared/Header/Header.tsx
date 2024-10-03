import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import "./Header.sass";

const Header = () => {
	return (
		<header>
			<Image src={Logo} width={50} height={50} alt="Miller Arias Dev" />
			<p>Miller Arias Dev</p>
			<button>
				<CiMenuBurger />
			</button>
		</header>
	);
};

export default Header;
