"use client";

import Link from "next/link";

import { IoMdPerson } from "react-icons/io";
import { MdWork, MdConnectWithoutContact } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { TiMediaPlay } from "react-icons/ti";

import "./Menu.sass";
import SocialMedia from "../shared/SocialMedia/SocialMedia";

interface menuProps {
	side: boolean;
}
const Menu = ({ side }: menuProps) => {
	if (side) {
		return (
			<aside className="menu">
				<Link href="#">
					<IoMdPerson />
				</Link>
				<Link href="#">
					<MdWork />
				</Link>
				<Link href="#">
					<FaGraduationCap />
				</Link>
				<Link href="#">
					<TiMediaPlay />
				</Link>
				<Link href="#">
					<MdConnectWithoutContact />
				</Link>
			</aside>
		);
	}
	return (
		<nav className="menu__mobile">
			<ul className="menu__mobile-nav">
				<li>About Me</li>
				<li>Experience</li>
				<li>Education</li>
				<li>Content</li>
				<li>Contact</li>
			</ul>
			<SocialMedia />
		</nav>
	);
};

export default Menu;
