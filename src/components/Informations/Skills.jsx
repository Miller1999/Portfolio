import { Fragment, useContext } from "react";
import { PortfolioContext } from "../../Context/context";

const Skills = () => {
  const { ListSkills, skills } = useContext(PortfolioContext);
  return (
    <Fragment>
      <aside className="w-2/5 max-w-[calc(135px+32px)] h-[calc(647px-32px)] border-r border-black p-4 bg-gray-500 flex flex-col gap-5">
        <span>Panel</span>
        <div className="flex flex-col gap-5">
          {/*Secciones*/}
          <div className="flex justify-center py-2 rounded-lg hover:bg-gray-300 hover:text-black">
            <button>All</button>
          </div>
          <div className="flex justify-center py-2 rounded-lg hover:bg-gray-300 hover:text-black">
            <button>Technical Skills</button>
          </div>
          <div className="flex justify-center py-2 rounded-lg hover:bg-gray-300 hover:text-black">
            <button>Soft Skills</button>
          </div>
        </div>
      </aside>
      <div className="h-full max-h-[600px] p-10 max-w-4xl text-base  overflow-y-auto">
        {skills ? (
          <Fragment>
            {ListSkills.map((skill) => {
              return (
                <div key={skill.title} className="flex flex-col">
                  <img src={skill.img} alt={skill.title} />
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </Fragment>
        ) : (
          <Fragment />
        )}
      </div>
    </Fragment>
  );
};

export default Skills;
