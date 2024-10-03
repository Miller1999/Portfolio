"use client";

import { ReactNode } from "react";
import "./section.sass";

interface SectionTypes {
	children: ReactNode;
	name: string;
}

const DefSection = ({ children, name }: SectionTypes) => {
	if (name === "Hero") {
		return <section className="Hero">{children}</section>;
	}
	return <section>{children}</section>;
};

export default DefSection;
