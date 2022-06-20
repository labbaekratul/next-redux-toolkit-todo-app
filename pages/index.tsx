import type { NextPage } from "next";
import HomeComponets from "../components/HomeComponets";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen min-w-full">
      <HomeComponets />
    </div>
  );
};

export default Home;
