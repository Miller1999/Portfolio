import "./about.sass";
import { skills } from "../../info.json";
const About = () => {
	console.log(skills);

	return (
		<main className="about">
			<div className="profile--image">
				<img
					src="https://avatars.githubusercontent.com/u/22383830?s=400&u=83ad172dcd5d67bbf9ef6d3dfa7eb722c34c67d1&v=4"
					alt=""
				/>
			</div>
			<div className="biography--text">
				<h1>About Me</h1>
				<p>
					I am Miller Arias, a <strong>FrontEnd developer</strong> from Colombia
					with a passion for technology.
				</p>

				<p>
					My journey started in Electronic Engineering, but my love for
					programming led me to graduate as a FrontEnd and Fullstack Developer
					with JavaScript.
				</p>

				<p>
					My portfolio reflects my creativity and technical skills. Besides
					technology, I enjoy video games, reading and nature. My philosophy is
					constant improvement and the desire to share knowledge.
				</p>

				<p>
					In the future, I look forward to creating innovative projects and
					founding my own game studio, while continuing to learn and grow. My
					journey reflects determination and passion for technology.
				</p>
			</div>
			<div id="skills" className="skills">
				<h2>Skills</h2>
				<div className="skills--sections">
					<div className="Skills">
						{skills.map((skill) => (
							<article key={skill.title} className="Skills--item">
								<img src={skill.img} alt={skill.title} />
								<span className="tooltipText">{skill.title}</span>
							</article>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default About;
