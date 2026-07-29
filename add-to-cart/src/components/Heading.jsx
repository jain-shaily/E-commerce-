import React, { useContext } from "react";
import { themehandler } from "../context/ThemeContext";

const Heading = () => {
  const [theme] = useContext(themehandler);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <h1
        className={`${
          theme === "dark" ? "text-white" : "text-slate-950"
        } text-3xl font-extrabold text-center`}
      >
        Browse Departments
      </h1>

      <p className="text-gray-600 text-center max-w-xl">
        Find premium garments custom tailored to your parameters.
      </p>
    </div>
  );
};

export default Heading;