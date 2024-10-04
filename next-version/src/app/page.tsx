import Menu from "@/components/Menu/Menu";
import CustomDiv from "@/components/shared/CustomDiv/CustomDiv";
import DefSection from "@/components/shared/Section/Section";
import "@/sass/global.sass";
import { Fragment } from "react";

export default function Home() {
	return (
		<Fragment>
			<Menu side={true} />
			<main>
				<DefSection name="Hero">
					<CustomDiv name="About" />
					<CustomDiv name="Experience" />
					<CustomDiv name="CTA">
						<h1>Miller Arias</h1>
						<p>@DevArias</p>
						<button>Projects</button>
					</CustomDiv>
					<CustomDiv name="Education" />
					<CustomDiv name="Content" />
					<CustomDiv name="Contact" />
				</DefSection>
				<section id="Hero"></section>
				<section id="AboutMe">
					<section>About Me</section>
					<figure>Imagen</figure>
					<section>Skills</section>
				</section>
				<section id="FeaturedProject">Featured Project</section>
				<section id="FeaturedEducation">Featured Education</section>
				<section id="Contact">Contact</section>
			</main>
		</Fragment>
	);
}
