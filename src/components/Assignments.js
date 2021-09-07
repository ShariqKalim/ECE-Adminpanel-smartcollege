import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const Assignments = () => {
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
        <NavLink to="/NT_TASK_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-green-600 to-green-400 font-medium w-full">
              Assignments
            </h4>
            <h5 className="text-center p-5">Network Theory</h5>
          </div>
        </NavLink>
        <NavLink to="/ED_TASK_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-green-600 to-green-400 font-medium w-full">
              Assignments
            </h4>
            <h5 className="text-center p-5">Electronic Devices</h5>
          </div>
        </NavLink>
        <NavLink to="/SS_TASK_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-green-600 to-green-400 font-medium w-full">
              Assignments
            </h4>
            <h5 className="text-center p-5">Signals & Systems</h5>
          </div>
        </NavLink>
        <NavLink to="/DSD_TASK_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-green-600 to-green-400 font-medium w-full">
              Assignments
            </h4>
            <h5 className="text-center p-5">Digital System Design</h5>
          </div>
        </NavLink>
        <NavLink to="/DSA_TASK_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-green-600 to-green-400 font-medium w-full">
              Assignments
            </h4>
            <h5 className="text-center p-5">Data Structure & Algorithm (ES)</h5>
          </div>
        </NavLink>
        <NavLink to="/MATH_TASK_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-green-600 to-green-400 font-medium w-full">
              Assignments
            </h4>
            <h5 className="text-center p-5">Mathematics III</h5>
          </div>
        </NavLink>
        <NavLink to="/ES_TASK_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-green-600 to-green-400 font-medium w-full">
              Assignments
            </h4>
            <h5 className="text-center p-5">Environmental Science</h5>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Assignments;
