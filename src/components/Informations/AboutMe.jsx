import { Fragment, useContext } from "react";
import Perfil from "../../assets/perfil.jpeg";
import { PortfolioContext } from "../../Context/context";

const AboutMe = () => {
  const { aboutMe, handleAboutMe, biography, handleBiography } =
    useContext(PortfolioContext);
  return (
    <Fragment>
      <aside className="w-2/5 max-w-[calc(135px+32px)] h-[calc(647px-32px)] border-r border-black p-4 bg-gray-500 flex flex-col gap-5">
        <span>Panel</span>
        <div className="flex flex-col gap-5">
          {/*Secciones*/}
          <div className="flex justify-center py-2 rounded-lg hover:bg-gray-300 hover:text-black">
            <button onClick={() => handleAboutMe()}>About Me</button>
          </div>
          <div className="flex justify-center py-2 rounded-lg hover:bg-gray-300 hover:text-black">
            <button onClick={() => handleBiography()}>Biography</button>
          </div>
        </div>
      </aside>
      <div className="h-full max-h-[600px] p-10 max-w-4xl text-base  overflow-y-auto">
        {aboutMe ? (
          <div className="flex flex-col gap-5 items-center">
            <img
              src={Perfil}
              className="rounded-full w-1/4 h-1/4"
              alt="Miller Arias"
            />
            <div>
              <h1 className="text-lg font-bold">
                Soy Miller Javier Arias Quintero, un apasionado desarrollador
              </h1>
            </div>
            <div>
              <p>
                Tengo 24 años, originario de Colombia y actualmente estudiante
                de ingeniería electrónica en la Universidad Nacional de
                Colombia. Mi fascinación por la tecnología me impulsa
                constantemente a expandir y mejorar mis habilidades, tanto las
                técnicas como las interpersonales. Actualmente, soy un
                desarrollador Frontend con sólidos conocimientos en la creación
                de interfaces de usuario atractivas y funcionales. Además, he
                adquirido experiencia en la parte backend y en la gestión de
                bases de datos, lo que me permite tener una comprensión integral
                de la arquitectura de aplicaciones web. Tengo 23 años, soy
                colombiano y estoy estudiando ingeniería electrónica en la
                universidad nacional de Colombia, soy un apasionado por la
                tecnología y por ampliar y mejorar mis habilidades tanto duras
                como blandas.
              </p>
            </div>
          </div>
        ) : (
          <Fragment></Fragment>
        )}
        {biography ? (
          <div className="flex flex-col gap-5 items-center">
            <img
              src={Perfil}
              className="rounded-full w-1/4 h-1/4"
              alt="Miller Arias"
            />
            <div>
              <h1> Miller Arias: Del Mundo Electrónico al Código Creativo</h1>
            </div>
            <div>
              <p>
                Soy Miller Arias, y mi historia es un viaje de transformación y
                pasión por la tecnología. Nací en Colombia el 20 de Mayo de
                1999, con una curiosidad innata por el mundo que me rodeaba. A
                lo largo de mi vida, he seguido mi pasión por la tecnología, lo
                que me llevó a un viaje inesperado desde la Ingeniería
                Electrónica hasta el emocionante mundo del desarrollo FrontEnd.
              </p>
              <p>
                Mi aventura comenzó con la elección de estudiar Ingeniería
                Electrónica en la universidad. Durante mis años de estudio, me
                sumergí en el fascinante mundo de los circuitos y la
                electrónica. Sin embargo, mientras avanzaba en mi carrera,
                descubrí una pasión latente por la programación y el diseño web.
              </p>
              <p>
                Mi determinación me llevó a aprender y graduarme como
                Desarrollador FrontEnd y Fullstack con JavaScript, demostrando
                mi capacidad para dominar nuevas habilidades por cuenta propia.
                Aunque carecía de experiencia laboral formal, mi portafolio de
                proyectos de FrontEnd se convirtió en mi lienzo para demostrar
                mi creatividad y habilidades técnicas.
              </p>
              <p>
                Además de la tecnología, tengo una amplia gama de intereses que
                enriquecen mi vida. Los videojuegos son una de mis pasiones, y
                disfruto tanto de jugarlos como de crear experiencias
                interactivas. La programación sigue siendo mi pasión central,
                pero también me dedico a la lectura y el dibujo. Cuando necesito
                relajarme, me subo a mi bicicleta y me aventuro en la naturaleza
                o me sumerjo en la literatura que me inspira.
              </p>
              <p>
                Mis valores personales me guían en cada paso de mi vida. Creo en
                la búsqueda constante de la mejora y en aprender algo nuevo cada
                día. Me esfuerzo al máximo en todo lo que hago, y mi deseo de
                compartir mis conocimientos con otros es una parte fundamental
                de mi identidad. La filosofía de nunca dejar de aprender me
                impulsa a abrazar cada desafío como una oportunidad para crecer.
              </p>
              <p>
                Mirando hacia el futuro, tengo metas ambiciosas en el mundo del
                desarrollo web. Sueño con crear proyectos innovadores y
                contribuir al avance de la tecnología en la industria FrontEnd.
                Mi pasión por los videojuegos también persiste, y mi objetivo es
                fundar mi propio estudio de videojuegos, donde pueda dar vida a
                mundos virtuales que cautiven a jugadores de todo el mundo.
                Además, anhelo viajar y compartir mi conocimiento con aquellos
                que deseen aprender.
              </p>
              <p>
                Mi trayecto desde la Ingeniería Electrónica hasta el desarrollo
                FrontEnd es un testimonio de mi determinación y amor por la
                tecnología. Cada día es una nueva oportunidad para aprender y
                avanzar, y estoy emocionado por el camino que me espera. Creo
                que la combinación de mi pasión por la tecnología y mi búsqueda
                constante de la excelencia me llevará a alcanzar mis sueños y
                metas.
              </p>
            </div>
          </div>
        ) : (
          <Fragment></Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default AboutMe;
