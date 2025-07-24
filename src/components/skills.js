import { Skills } from "../info.json";
import { skillCategory } from "./skillCategory";

// Agrupar dinámicamente por categoría
const groupByCategory = Skills.reduce((acc, skill) => {
	if (!acc[skill.category]) {
		acc[skill.category] = [];
	}
	acc[skill.category].push(skill);
	return acc;
}, {});

export const skills = () => {
	return `
    <section>
      <h2>Skills</h2>
      ${Object.entries(groupByCategory)
				.map(([categoryName, skills]) => skillCategory(categoryName, skills))
				.join("")}
    </section>
  `;
};
