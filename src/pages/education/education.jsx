import "./education.sass";
import { education } from "../../info.json";
import { useState } from "react";

const Education = () => {
	const [selected, setSelected] = useState("");
	const names = education.map((item) => item.institution);
	const tabs = [];
	function click(e) {
		setSelected(e.target.textContent);
	}
	function institutionsNames(institution) {
		institution.forEach((item) => {
			if (tabs.indexOf(item) === -1) {
				tabs.push(item);
			}
		});
	}
	institutionsNames(names);

	return (
		<main>
			<nav className="tabs">
				<div onClick={(e) => click(e)}>All</div>
				{tabs.map((tab) => (
					<div key={tab} onClick={(e) => click(e)}>
						{tab}
					</div>
				))}
			</nav>
			{selected === "Platzi" ? (
				<section className="Education">
					<div className="Schools">
						{education
							.filter((ed) => ed.institution === "Platzi")
							.map((item) => (
								<article key={item.title} className="Schools--item">
									<div>
										<h3>{item.title}</h3>
										<img src={item.logo} alt={item.institution} />
									</div>
									<div>
										<p>{item.institution}</p>
										<p>{item.date}</p>
									</div>
								</article>
							))}
					</div>
				</section>
			) : selected === "National University of colombia" ? (
				<section className="Education">
					<div className="Schools">
						{education
							.filter(
								(ed) => ed.institution === "National University of colombia"
							)
							.map((item) => (
								<article key={item.title} className="Schools--item">
									<div>
										<h3>{item.title}</h3>
										<img src={item.logo} alt={item.institution} />
									</div>
									<div>
										<p>{item.institution}</p>
										<p>{item.date}</p>
									</div>
								</article>
							))}
					</div>
				</section>
			) : selected === "Alura" ? (
				<section className="Education">
					<div className="Schools">
						{education
							.filter((ed) => ed.institution === "Alura")
							.map((item) => (
								<article key={item.title} className="Schools--item">
									<div>
										<h3>{item.title}</h3>
										<img src={item.logo} alt={item.institution} />
									</div>
									<div>
										<p>{item.institution}</p>
										<p>{item.date}</p>
									</div>
								</article>
							))}
					</div>
				</section>
			) : selected === "Centro Colombo Americano" ? (
				<section className="Education">
					<div className="Schools">
						{education
							.filter((ed) => ed.institution === "Centro Colombo Americano")
							.map((item) => (
								<article key={item.title} className="Schools--item">
									<div>
										<h3>{item.title}</h3>
										<img src={item.logo} alt={item.institution} />
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
									<img src={item.logo} alt={item.institution} />
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
