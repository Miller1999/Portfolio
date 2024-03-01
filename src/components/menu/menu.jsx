import "./menu.sass";
import { social } from "../../info.json";

const Menu = () => {
	return (
		<nav className="menu__container">
			<ul className="menu">
				<li>
					<a href="/index.html">1. Home</a>
				</li>
				<li>
					<a href="/pages/about.html">2. About</a>
				</li>
				<li>
					<a href="/pages/work.html">3. Work</a>
				</li>
				<li>
					<a href="/pages/education.html">4. Education</a>
				</li>
				<li>
					<a href="/pages/contact.html">5. Contact</a>
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
