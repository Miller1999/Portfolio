import "./style.css";
import { Navbar } from "./components/navbar.js";
import { Hero } from "./components/hero.js";
import { projects } from "./components/projects.js";
import { skills } from "./components/skills.js";
import { experience } from "./components/experience.js";
import { education } from "./components/education.js";

const app = document.getElementById("app");

app.innerHTML = `
  <main>
    ${Navbar()}
    ${Hero()}
    ${projects()}
    ${skills()}
    ${experience()}
    ${education()}
  </main>
`;
