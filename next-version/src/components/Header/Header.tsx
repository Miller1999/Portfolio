"use client";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import "./Header.sass";
import { Fragment, useContext } from "react";
import { MenuContext } from "@/Context/MenuContext";
import Menu from "../Menu/Menu";

const Header = () => {
	const { isMenuOpen, toggleMenu } = useContext(MenuContext);
	return (
		<Fragment>
			<header>
				<Image src={Logo} width={50} height={50} alt="Miller Arias Dev" />
				<p>Miller Arias Dev</p>
				<button onClick={toggleMenu}>
					<CiMenuBurger />
				</button>
			</header>
			{isMenuOpen ? <Menu side={false} /> : <></>}
		</Fragment>
	);
};

export default Header;
