import "./education.sass";
import { education } from "../../info.json";
import { useState } from "react";

const Education = () => {
	const [selected, setSelected] = useState("");
	const tabs = [
		"All",
		"Professional",
		"Development",
		"Languages",
		"Soft Skills",
	];
	function click(e) {
		setSelected(e.target.textContent);
	}
	return (
		<main>
			<nav className="tabs">
				{tabs.map((tab) => (
					<div key={tab} onClick={(e) => click(e)}>
						<p>{tab}</p>
					</div>
				))}
			</nav>
			{selected === "Professional" ? (
				<section className="Education">
					<div className="Schools">
						{education
							.filter((ed) => ed.type === "Professional")
							.map((item) => (
								<article key={item.title} className="Schools--item">
									<div>
										<h3>{item.title}</h3>
										<img
											id={item.institution}
											src={item.logo}
											alt={item.institution}
										/>
									</div>
									<div>
										<p>{item.institution}</p>
										<p>{item.date}</p>
									</div>
								</article>
							))}
					</div>
				</section>
			) : selected === "Development" ? (
				<section className="Education">
					<div className="Schools">
						{education
							.filter((ed) => ed.type === "Development")
							.map((item) => (
								<article key={item.title} className="Schools--item">
									<div>
										<h3>{item.title}</h3>
										<img
											id={item.institution}
											src={item.logo}
											alt={item.institution}
										/>
									</div>
									<div>
										<p>{item.institution}</p>
										<p>{item.date}</p>
									</div>
								</article>
							))}
					</div>
				</section>
			) : selected === "Languages" ? (
				<section className="Education">
					<div className="Schools">
						{education
							.filter((ed) => ed.type === "Languages")
							.map((item) => (
								<article key={item.title} className="Schools--item">
									<div>
										<h3>{item.title}</h3>
										<img
											id={item.institution}
											src={item.logo}
											alt={item.institution}
										/>
									</div>
									<div>
										<p>{item.institution}</p>
										<p>{item.date}</p>
									</div>
								</article>
							))}
					</div>
				</section>
			) : selected === "Soft Skills" ? (
				<section className="Education">
					<div className="Schools">
						{education
							.filter((ed) => ed.type === "Soft Skills")
							.map((item) => (
								<article key={item.title} className="Schools--item">
									<div>
										<h3>{item.title}</h3>
										<img
											id={item.institution}
											src={item.logo}
											alt={item.institution}
										/>
									</div>
									<div>
										<p>{item.institution}</p>
										<p>{item.date}</p>
									</div>
								</article>
							))}
					</div>
				</section>
			) : (
				<section className="Education">
					<div className="Schools">
						{education.map((item) => (
							<article key={item.title} className="Schools--item">
								<div>
									<h3>{item.title}</h3>
									<img
										id={item.institution}
										src={item.logo}
										alt={item.institution}
									/>
								</div>
								<div>
									<p>{item.institution}</p>
									<p>{item.date}</p>
								</div>
							</article>
						))}
					</div>
				</section>
			)}
		</main>
	);
};

export default Education;
