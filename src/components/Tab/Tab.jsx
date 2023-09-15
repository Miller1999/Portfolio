import CancelIcon from "@mui/icons-material/Cancel";
import { red } from "@mui/material/colors";
import { PortfolioContext } from "../../Context/context";
import { Fragment, useContext } from "react";

const Tab = ({ children }) => {
  const { tab, handleClose } = useContext(PortfolioContext);

  return (
    <Fragment>
      {tab ? (
        <section className="flex w-full h-[87vh] justify-center items-center">
          <div className="w-4/5 h-4/5 bg-gray-400 bg-opacity-80 rounded-md text-white">
            <div className="w-full h-8 flex justify-end items-center border-b border-black py-2 px-2 bg-gray-800 rounded-t-md">
              <button onClick={() => handleClose()}>
                <CancelIcon sx={{ color: red[500] }} />
              </button>
            </div>
            <div className="flex">{children}</div>
          </div>
        </section>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

export default Tab;
