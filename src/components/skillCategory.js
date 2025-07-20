export const skillCategory = (category) => {
	return `
        <h4>${category[0]?.category}</h4>
        <div class="category">
        ${category
					.map((cat) => `<img src="${cat.img}" alt="${cat.title}" />`)
					.join("")}
        </div>
    `;
};
