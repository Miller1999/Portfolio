import { Skills } from "../info.json";
import { skillCategory } from "./skillCategory";

const frontend = Skills.filter((skill) => skill.category == "Frontend");
const backend = Skills.filter((skill) => skill.category == "Backend");
const db = Skills.filter((skill) => skill.category == "Base de Datos");
const languages = Skills.filter((skill) => skill.category == "Lenguajes");
const tools = Skills.filter((skill) => skill.category == "Herramientas");
const soft = Skills.filter((skill) => skill.category == "Soft Skills");

const skillsSeparated = [frontend, backend, db, languages, tools, soft];

export const skills = () => {
	return `
	<section>
	
	<h3>Skills</h3>
	${skillsSeparated
		.map((skill) => {
			return skillCategory(skill);
		})
		.join("")}
	</section>
	`;
};
