import "./style.css";
import { Navbar } from "./components/navbar.js";
import { Hero } from "./components/hero.js";
import { projects } from "./components/projects.js";
import { skills } from "./components/skills.js";

const app = document.getElementById("app");

app.innerHTML = `
  <main>
    ${Navbar()}
    ${Hero()}
    ${projects()}
    ${skills()}
  </main>
`;
