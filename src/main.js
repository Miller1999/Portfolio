import "./style.css";
import { Projects, Skills, education } from "./info.json";

const body = document.querySelector("body");
const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const nav = document.querySelector("nav");
const lightMode = document.querySelector(".light-icon");
const darkMode = document.querySelector(".dark-icon");
const projects_container = document.querySelector(".projects__container");
const skills_container = document.querySelector(".skills__container");
const education_container = document.querySelector(".education__container");

projects_container.innerHTML = Projects.filter((project) => project.high)
	.map((project) => {
		return `
		<div class="projects__card">
			<h3>${project.title}</h3>
			<img src="${project.img}" alt="${project.title}" />
			<p>${project.description}</p>
			<h4>Tech</h4>
			<ul>
				${project.tech.map((tech) => `<li>${tech}</li>`).join("")}
			</ul>
			<h4>Responsibilities</h4>
			<ul>
				${project.results.map((result) => `<li>${result}</li>`).join("")}
			</ul>
			<div class="card__buttons">
			<button>
				<a href="${project.repo}" target="_blank">View project</a>
			</button>
			<button>
				<a href="${project.live}" target="_blank">Live project</a>
			</button>
			</div>
		</div>
	`;
	})
	.join("");

/* --- JS (reemplaza tu render + lógica de carrusel) --- */

const groupedSkills = Skills.reduce((acc, skill) => {
	if (!acc[skill.category]) acc[skill.category] = [];
	acc[skill.category].push(skill);
	return acc;
}, {});

// Render: construimos un "track" y ponemos cada category como un slide
const slidesHtml = Object.entries(groupedSkills)
	.map(([category, skills]) => {
		return `
        <div class="skills__cards">
          ${skills
						.map(
							(skill) => `
            <div class="skills__card">
              <img src="${skill.img}" alt="${skill.title}" id="${skill.title}" />
              <p>${skill.title}</p>
            </div>
          `
						)
						.join("")}
        </div>
    `;
	})
	.join("");

// Inserto el track que será el que se mueva
skills_container.innerHTML = slidesHtml;

education_container.innerHTML = education
	.filter((project) => project.high)
	.map((project) => {
		return `
		<div class="education__card">
			<img src="${project.logo}" alt="${project.title}" />
			<div>
				<h3>${project.title}</h3>
				<p>${project.institution}</p>
			</div>
		</div>
	`;
	})
	.join("");

menu.addEventListener("click", () => {
	nav.classList.toggle("open-menu");
	hamburger.classList.toggle("hidden");
	close.classList.toggle("hidden");
});

lightMode.addEventListener("click", () => {
	body.classList.remove("dark");
	darkMode.classList.toggle("hidden");
	lightMode.classList.toggle("hidden");
});

darkMode.addEventListener("click", () => {
	body.classList.add("dark");
	lightMode.classList.toggle("hidden");
	darkMode.classList.toggle("hidden");
});
