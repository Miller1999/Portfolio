import "./work.sass";
import { projects } from "../../info.json";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";

const Work = () => {
	return (
		<main>
			<div className="work--title">
				<h1>Work</h1>
				<span>{projects.length}</span>
			</div>
			{projects.map((project) => (
				<div key={project.title} className="work--title">
					<DoubleArrowOutlinedIcon className="icon" />
					<h2>{project.title}</h2>
				</div>
			))}
		</main>
	);
};

export default Work;
