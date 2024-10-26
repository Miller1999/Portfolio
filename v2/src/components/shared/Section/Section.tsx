import Skills from "../../Skills/Skills";
import Profile from "../../../assets/profile.webp";
import { ReactNode } from "react";
import CustomDiv from "../CustomDiv/CustomDiv";
import "./section.sass";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import data from "../../../info.json";
import Contact from "../../Contact/Contact";

interface SectionTypes {
	children?: ReactNode;
	name: string;
}

const DefSection = ({ children, name }: SectionTypes) => {
	const { projects, education } = data;
	if (name === "Hero") {
		return (
			<section className="Hero">
				<CustomDiv name="About" />
				<CustomDiv name="Experience" />
				<CustomDiv name="CTA">
					<h1>Miller Arias</h1>
					<span>@DevArias</span>
					<button>Projects</button>
				</CustomDiv>
				<CustomDiv name="Education" />
				<CustomDiv name="Content" />
				<CustomDiv name="Contact" />
			</section>
		);
	} else if (name === "AboutMe") {
		return (
			<section className="AboutMe">
				<h2>About Me</h2>

				<div className="AboutMe__profile">
					<img src={Profile} alt="Profile Picture" />
				</div>
				<div className="biography--text">
					<h1>About Me</h1>
					<p>
						I am Miller Arias, a <strong>FrontEnd developer</strong> from
						Colombia with a passion for technology.
					</p>

					<p>
						My journey started in Electronic Engineering, but my love for
						programming led me to graduate as a FrontEnd and Fullstack Developer
						with JavaScript.
					</p>

					<p>
						My portfolio reflects my creativity and technical skills. Besides
						technology, I enjoy video games, reading and nature. My philosophy
						is constant improvement and the desire to share knowledge.
					</p>

					<p>
						In the future, I look forward to creating innovative projects and
						founding my own game studio, while continuing to learn and grow. My
						journey reflects determination and passion for technology.
					</p>
				</div>
				<h3>Skills</h3>
				<Skills />
			</section>
		);
	} else if (name === "FeaturedProject") {
		return (
			<section className="FeaturedProject">
				<h2>Featured Project</h2>
				<FeaturedCard
					info="Project"
					title={projects[0].title}
					image={projects[0].img}
					subtitle={projects[0].subtitle}
					tech={projects[0].tech}
					date={projects[0].date}
					repo={projects[0].repo}
					link={projects[0].link}
				/>
			</section>
		);
	} else if (name === "FeaturedEducation") {
		return (
			<section className="FeaturedEducation">
				<h2>Featured Education</h2>
				<FeaturedCard
					info="Education"
					title={education[0].title}
					logo={education[0].logo}
					institution={education[0].institution}
					date={education[0].date}
				/>
			</section>
		);
	} else if (name === "Contact") {
		return (
			<section className="Contact">
				<h2>Contact</h2>
				<Contact />
			</section>
		);
	}
	return <section>{children}</section>;
};

export default DefSection;
