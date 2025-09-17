import "./project.sass";
import { projects } from "../../info.json";
import { Link } from "react-router-dom";

const Project = () => {
	return (
		<main className="project">
			<div className="project--title">
				<h1>Project</h1>
				<span>{projects.length}</span>
			</div>
			{projects.map((project) => (
				<Link key={project.title} to={`/projects/${project.title}`}>
					<div className="projects__title">
						<img
							className="icon"
							src="https://www.svgrepo.com/show/502625/double-arrow-right.svg"
						/>
						<h2>{project.title}</h2>
					</div>
				</Link>
			))}
		</main>
	);
};

export default Project;
