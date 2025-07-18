import { Skills } from "../info.json";

export const skills = () => {
	const categories = [...new Set(Skills.map((skill) => skill.category))];
};
