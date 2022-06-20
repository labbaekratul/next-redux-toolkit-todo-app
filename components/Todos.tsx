import React from "react";

function Todos() {
  return (
    <div className="mt-20 flex justify-between">
      <div className="ml-10">
        <h1 className="font-bold text-lg text-lime-500">
          All Tasks <span className="text-gray-500 font-normal ">(1)</span>
        </h1>
      </div>
      <div>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            + New Task
          </span>
        </button>
      </div>
    </div>
  );
}

export default Todos;
