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
				<a href="#">
					<IoMdPerson />
				</a>
				<a href="#">
					<MdWork />
				</a>
				<a href="#">
					<FaGraduationCap />
				</a>
				<a href="#">
					<TiMediaPlay />
				</a>
				<a href="#">
					<MdConnectWithoutContact />
				</a>
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
