import React from "react";
import Card from "@material-ui/core/Card";

function Body() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3  border-r-2   self-stretch py-4 pr-4">
        <Card className="p-4">
          <h4
            className="font-bold mb-2"
            style={{ textDecoration: "underline" }}
          >
            Tasks Managment :
          </h4>
          <div>
            <ul>
              <li className="text-gray-400 cursor-pointer  hover:bg-gray-700 px-2">
                ALl Tasks
              </li>
              <li className="text-gray-400 cursor-pointer dark:md:hover:bg-fuchsia-600">
                In Progress
              </li>
              <li className="text-gray-400 cursor-pointer dark:md:hover:bg-fuchsia-600">
                Compeleted
              </li>
              <li className="text-gray-400 cursor-pointer dark:md:hover:bg-fuchsia-600">
                Today
              </li>
              <li className="text-gray-400 cursor-pointer dark:md:hover:bg-fuchsia-600">
                Tommorow
              </li>
              <li className="text-gray-400 cursor-pointer dark:md:hover:bg-fuchsia-600">
                Month
              </li>
            </ul>
          </div>
        </Card>
      </div>
      <div className="col-span-9 pl-2">col 10</div>
    </div>
  );
}

export default Body;
