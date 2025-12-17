import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams]= useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  return (
    <div className="flex flex-col w-full" >
    <div className="px-5 flex w-full">
    <div>
   <iframe className="rounded-lg"
   width="830" 
   height="450" 
   src={"https://www.youtube.com/embed/" + searchParams.get("v")}
   title="YouTube video player" 
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
   >
   </iframe>
   </div>
   <div className="w-full">
    <LiveChat />
   </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}
export default WatchPage;
