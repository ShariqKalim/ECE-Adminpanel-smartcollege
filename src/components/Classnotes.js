import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const Classnotes = () => {
  const history = useHistory();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
    } else {
      history.push("/");
    }
  }, []);
  return (
    <>
      <img src="images/S.png" alt="logo" className="mx-auto" />
      <div className="w-8/12 mx-auto flex flex-wrap justify-around mt-20">
        <NavLink to="/NT_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Network Theory</h5>
          </div>
        </NavLink>
        <NavLink to="/ED_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Electronic Devices</h5>
          </div>
        </NavLink>
        <NavLink to="/SS_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Signals and Systems</h5>
          </div>
        </NavLink>
        <NavLink to="/DSD_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Digital System Design</h5>
          </div>
        </NavLink>
        <NavLink to="/DSA_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Data Structure & Algorithm (ES)</h5>
          </div>
        </NavLink>
        <NavLink to="/MATH_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Mathematics III </h5>
          </div>
        </NavLink>
        <NavLink to="/ES_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Environmental Science</h5>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Classnotes;
