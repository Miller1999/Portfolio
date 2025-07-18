import { projectCard } from "./projectCard";
import { Projects } from "../info.json";

export function projects() {
	return `<section>
    <h2>Highlight projects</h2>
                ${Projects.map((project) => {
									return projectCard(
										project.title,
										project.description,
										project.techs,
										project.github,
										project.live,
										project.results,
										project.image
									);
								})}
    
    </section>`;
}
