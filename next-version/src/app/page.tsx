import DefSection from "@/components/shared/Section";
import "@/sass/global.sass";

export default function Home() {
	return (
		<main>
			<DefSection name="Hero">
				<div>About Me</div>
				<div>Experience</div>
				<div>
					<nav>Social media</nav>
					<button>CTA</button>
				</div>
				<div>Education</div>
				<div>Contact</div>
				<div>Other</div>
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
	);
}
