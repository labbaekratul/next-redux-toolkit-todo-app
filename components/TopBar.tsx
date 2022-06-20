import { NextPage } from "next";
import React from "react";

const TopBar: NextPage = () => {
  return (
    <div className="flex justify-between items-center" style={{ height: 90 }}>
      <div>
        <h2 className="text-red-500 font-bold text-xl">Todo App</h2>
      </div>
      <div className="flex justify-between">
        <div>
          <span className="text-red-500 font-bold text-xl">ratzz</span>
          <span>^</span>
        </div>
        <div>
          <h1>IMAGE</h1>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
