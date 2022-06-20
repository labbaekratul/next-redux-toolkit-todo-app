import Body from "./Body";
import TopBar from "./TopBar";

const HomeComponets = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      <div className="2xl:container 2xl:mx-auto">
        <TopBar />
      </div>
      <hr />
      <div className="2xl:container 2xl:mx-auto flex-1">
        <Body />
      </div>
    </div>
  );
};

export default HomeComponets;
