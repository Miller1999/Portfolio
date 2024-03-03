import { useParams } from "react-router-dom";
import "./template.sass";

const Template = ({ projects }) => {
	const { name } = useParams();
	const project = projects.find((project) => project.title === name);
	return (
		<main>
			<div id={project.title} className="project__img">
				<img src={project.img} alt={project.title} />
			</div>
			<section className="project__container">
				<div>
					<h1>{project.title}</h1>
				</div>
				<div>
					<p>{project.subtitle}</p>
				</div>
				<div className="project__table">
					<h3>Technologies</h3>
					<p>{project.tech}</p>
					<h3>Year</h3>
					<p>{project.date}</p>
					<h3>Github</h3>
					<a href={project.repo}>{project.title}</a>
				</div>
				<div className="project__description">
					<p>{project.description}</p>
					<span>
						<a href={project.link}>Visit my {project.title}!</a>
						<img
							className="icon"
							src="https://www.svgrepo.com/show/502625/double-arrow-right.svg"
						/>
					</span>
				</div>
			</section>
		</main>
	);
};

export default Template;
