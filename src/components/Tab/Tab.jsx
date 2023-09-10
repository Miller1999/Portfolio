import CancelIcon from "@mui/icons-material/Cancel";
import { red } from "@mui/material/colors";

const Tab = () => {
  return (
    <section className="flex w-full h-[87vh] justify-center items-center">
      <div className="w-4/5 h-4/5 bg-gray-400 bg-opacity-80 rounded-md text-white">
        <div className="w-full h-5 flex justify-between items-center border-b border-black py-3 px-3 bg-gray-800">
          <span className="text-sm">Barra de navegacion</span>
          <CancelIcon sx={{ color: red[500] }} fontSize="small" />
        </div>
        <div className="flex">
          <aside className="w-1/4 h-full border-r border-black p-3 bg-gray-500">
            <span>Panel</span>
            <div>
              {/*Secciones*/}
              <div>Sección 1</div>
              <div>Sección 2</div>
              <div>Sección 3</div>
            </div>
          </aside>
          <div className="h-full p-2">Contenido</div>
        </div>
      </div>
    </section>
  );
};

export default Tab;
