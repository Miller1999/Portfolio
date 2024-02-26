import "./menu.sass";

const Menu = () => {
	return (
		<nav>
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
				<li>
					<a href="">
						<img
							src="https://www.svgrepo.com/show/450156/github.svg"
							alt="Github"
						/>
					</a>
				</li>
				<li>
					<a href="">
						<img
							src="https://www.svgrepo.com/show/452051/linkedin.svg"
							alt="LinkedIn"
						/>
					</a>
				</li>
				<li>
					<a href="">
						<img
							src="https://www.svgrepo.com/show/452133/whatsapp.svg"
							alt="WhatsApp"
						/>
					</a>
				</li>
				<li>
					<a href="">
						<img
							src="https://www.svgrepo.com/show/477054/email-download.svg"
							alt="Mail"
						/>
					</a>
				</li>
				<li>
					<a href="">
						<img
							src="https://www.svgrepo.com/show/281704/curriculum-resume.svg"
							alt="Resume"
						/>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
