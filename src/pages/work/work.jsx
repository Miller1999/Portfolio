import "./work.sass";
import { projects } from "../../info.json";
import { Link } from "react-router-dom";

const Work = () => {
	return (
		<main>
			<div className="work--title">
				<h1>Work</h1>
				<span>{projects.length}</span>
			</div>
			{projects.map((project) => (
				<Link key={project.title} to={`/work/${project.title}`}>
					<div className="works__title">
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

export default Work;
