import { Fragment, useContext } from "react";
import { PortfolioContext } from "../../Context/context";
import Card from "../Card/Card";
import Aside from "../Aside/Aside";

const Skills = () => {
  const context = useContext(PortfolioContext);
  const Tech = context.ListSkills.filter(
    (skill) => skill.category === "Technical"
  );
  const Soft = context.ListSkills.filter((skill) => skill.category === "Soft");
  return (
    <Fragment>
      <Aside>
        <div className="flex flex-col gap-5">
          {/*Secciones*/}
          <div className="flex justify-center py-2 rounded-lg hover:bg-gray-300 hover:text-black">
            <button
              onClick={() => {
                context.handleSkills();
              }}
            >
              All
            </button>
          </div>
          <div className="flex justify-center py-2 rounded-lg hover:bg-gray-300 hover:text-black">
            <button
              onClick={() => {
                context.handleTechnical();
              }}
            >
              Technical Skills
            </button>
          </div>
          <div className="flex justify-center py-2 rounded-lg hover:bg-gray-300 hover:text-black">
            <button
              onClick={() => {
                context.handleSoft();
              }}
            >
              Soft Skills
            </button>
          </div>
        </div>
      </Aside>
      <div className="h-full max-h-[600px] p-10 max-w-4xl text-base  overflow-y-auto">
        {context.skills ? (
          <div className="flex gap-10 flex-wrap">
            {context.ListSkills.map((skill) => {
              return (
                <Card title={skill.title} key={skill.title} img={skill.img} />
              );
            })}
          </div>
        ) : (
          <Fragment />
        )}
        {context.technical ? (
          <div className="flex gap-10 flex-wrap">
            {Tech.map((skill) => {
              return (
                <Card title={skill.title} key={skill.title} img={skill.img} />
              );
            })}
          </div>
        ) : (
          <Fragment />
        )}
        {context.soft ? (
          <div className="flex gap-10 flex-wrap">
            {Soft.map((skill) => {
              return (
                <Card title={skill.title} key={skill.title} img={skill.img} />
              );
            })}
          </div>
        ) : (
          <Fragment />
        )}
      </div>
    </Fragment>
  );
};

export default Skills;
