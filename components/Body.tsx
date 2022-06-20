import React from "react";
import SideBar from "./SideBar";

import Todos from "./Todos";

function Body() {
  return (
    <div className="grid grid-cols-12 ">
      <SideBar />
      <div className="col-span-9 pl-2">
        <Todos />
      </div>
    </div>
  );
}

export default Body;
