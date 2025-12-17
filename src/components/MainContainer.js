import React from "react"
import ButtonsList from "./ButtonsList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  return (
    <div className="col-span">
     <ButtonsList/>
     <VideoContainer/>
    </div>
  );
};
export default MainContainer;
