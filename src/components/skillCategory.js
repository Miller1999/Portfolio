export const skillCategory = (categoryName, skills) => {
	return `
    <h4>${categoryName}</h4>
    <div class="category">
      ${skills
				.map(
					(skill) =>
						`<img src="${skill.img}" alt="${skill.title}" title="${skill.title}" />`
				)
				.join("")}
    </div>
  `;
};
