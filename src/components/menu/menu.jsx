import "./menu.sass";
import { social } from "../../info.json";
import { Link } from "react-router-dom";

const Menu = (setShowNav, showNav, setShowHome, showHome) => {
	return (
		<nav className="menu__container">
			<ul className="menu">
				<li>
					<Link
						to="/"
						onClick={() => {
							setShowNav(!showNav);
							setShowHome(!showHome);
						}}
					>
						1. Home
					</Link>
				</li>
				<li>
					<Link
						to="/about"
						onClick={() => {
							setShowNav(!showNav);
							setShowHome(!showHome);
						}}
					>
						2. About
					</Link>
				</li>
				<li>
					<Link
						to="/work"
						onClick={() => {
							setShowNav(!showNav);
							setShowHome(!showHome);
						}}
					>
						3. Work
					</Link>
				</li>
				<li>
					<Link
						to="/education"
						onClick={() => {
							setShowNav(!showNav);
							setShowHome(!showHome);
						}}
					>
						4. Education
					</Link>
				</li>
				<li>
					<Link
						to="/contact"
						onClick={() => {
							setShowNav(!showNav);
							setShowHome(!showHome);
						}}
					>
						5. Contact
					</Link>
				</li>
			</ul>
			<ul className="socialMedia">
				{social.map((media) => (
					<li key={media.name}>
						<a href={media.link}>
							<img src={media.logo} alt={media.name} />
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Menu;
