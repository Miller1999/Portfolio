import "./Skills.sass";
import data from "../../info.json";

interface skillProps {
	title: string;
	img: string;
}

const Skills = () => {
	return (
		<div className="Skills">
			{data.skills.map((skill: skillProps) => {
				return (
					<div key={skill.title} className="skill">
						<span>{skill.title}</span>
						<img src={skill.img} alt={skill.title} />
					</div>
				);
			})}
		</div>
	);
};

export default Skills;
