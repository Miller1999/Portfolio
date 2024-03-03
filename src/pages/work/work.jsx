import "./work.sass";
import { projects } from "../../info.json";

const Work = () => {
	return (
		<main>
			<div className="work--title">
				<h1>Work</h1>
				<span>{projects.length}</span>
			</div>
			{projects.map((project) => (
				<div key={project.title} className="works__title">
					<img
						className="icon"
						src="https://www.svgrepo.com/show/502625/double-arrow-right.svg"
					/>
					<h2>{project.title}</h2>
				</div>
			))}
		</main>
	);
};

export default Work;
