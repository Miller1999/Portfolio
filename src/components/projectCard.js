export const projectCard = (
	title,
	description,
	tech,
	github,
	live,
	results,
	image
) => {
	if (live !== "") {
		return `
            <div>
                <h3>${title}</h3>
                <p>${description}</p>
                <p>${tech}</p>
                <a href=${github}>Github</a>
                <p>${results}</p>
                <img src=${image} alt=${title}/>
            </div>
        `;
	} else {
		return `
            <div>
                <h3>${title}</h3>
                <p>${description}</p>
                <ul>
                ${techs.map((tech) => {
									return `<li>${tech.src} - ${tech.name}</li>`;
								})}
                </ul>
                <a href=${github}>Github</a>
                <a href=${live}>${title}</a>
                <p>${results}</p>
                <img src=${image} alt=${title}/>
            </div>
        `;
	}
};
