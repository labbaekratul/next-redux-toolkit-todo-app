import React from "react";
import Card from "@material-ui/core/Card";

function SideBar() {
  return (
    <div className="col-span-3  border-r-2  py-4 pr-4">
      <Card className="p-4 mt-10">
        <h4 className="font-bold mb-2" style={{ textDecoration: "underline" }}>
          Tasks Managment :
        </h4>
        <div>
          <ul>
            <li className="text-gray-400 cursor-pointer rounded  hover:bg-gray-600 hover:text-white p-2">
              ALl Tasks
            </li>
            <li className="text-gray-400 cursor-pointer rounded hover:bg-gray-600 hover:text-white p-2">
              In Progress
            </li>
            <li className="text-gray-400 cursor-pointer rounded hover:bg-gray-600 hover:text-white p-2">
              Compeleted
            </li>
            <li className="text-gray-400 cursor-pointer rounded hover:bg-gray-600 hover:text-white p-2">
              Today
            </li>
            <li className="text-gray-400 cursor-pointer rounded hover:bg-gray-600 hover:text-white p-2">
              Tommorow
            </li>
            <li className="text-gray-400 cursor-pointer rounded hover:bg-gray-600 hover:text-white p-2">
              Month
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}

export default SideBar;
