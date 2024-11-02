import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { RiFireLine } from "react-icons/ri";
import { CiMusicNote1 } from "react-icons/ci";
import { RiMovieLine } from "react-icons/ri";
import { RiLiveLine } from "react-icons/ri";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
//import store from "../utils/store"

const Sidebar = () => {
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
    // Early Return pattern
if(!isMenuOpen) return null;
return (
 <div className="p-6 shadow-lg w-48">
   <div>
    <ul>
     <li className="flex items-center hover:cursor-pointer m-2"> <LiaHomeSolid className="mx-2" /> <Link to="/"> Home</Link></li>
     <li className="flex items-center hover:cursor-pointer m-2 "><SiYoutubeshorts className="mx-2"/> Shorts</li>
     <li className="flex items-center hover:cursor-pointer m-2"><MdOutlineSubscriptions className="mx-2"/> Subscriptions</li>
    </ul>
    </div>
    <hr className="max-w-full my-4 "/>
   <h1 className="font-semibold px-5 pt-2">You </h1>
   <br/>

   <div>
    <ul>
      <li className="flex items-center hover:cursor-pointer m-2"> <MdHistory className="mx-2"/>History</li>
      <li className="flex items-center hover:cursor-pointer m-2"> <MdOutlinePlaylistPlay className="mx-2" />PLaylists</li>
      <li className="flex items-center hover:cursor-pointer m-2"><MdOutlineOndemandVideo className="mx-2"/> Your videos</li>
      <li className="flex items-center hover:cursor-pointer m-2"><GoLightBulb className="mx-2"/> Your Courses</li>
      <li className="flex items-center hover:cursor-pointer m-2"><MdOutlineWatchLater className="mx-2"/> Watch later</li>
      <li className="flex items-center hover:cursor-pointer m-2"><AiOutlineLike className="mx-2"/> Liked videos</li>
    </ul>
    </div>
    <hr className="max-w-full my-4 "/>
    <h1 className="font-semibold px-5 pt-2">Explore</h1>
    <br/>

    <div>
    <ul>
      <li className="flex items-center hover:cursor-pointer m-2"><RiFireLine className="mx-2"/> Trending</li>
      <li className="flex items-center hover:cursor-pointer m-2"><CiMusicNote1 className="mx-2"/> Music</li>
      <li className="flex items-center hover:cursor-pointer m-2"><RiMovieLine className="mx-2"/> Movies</li>
      <li className="flex items-center hover:cursor-pointer m-2"><RiLiveLine className="mx-2"/> Live</li>
      <li className="flex items-center hover:cursor-pointer m-2"><IoNewspaperOutline className="mx-2"/> News</li>
      <li className="flex items-center hover:cursor-pointer m-2"><GiTrophyCup className="mx-2"/> Sports</li>
      <li className="flex items-center hover:cursor-pointer m-2"><MdPodcasts className="mx-2"/> Podcasts</li>
      <li className="flex items-center hover:cursor-pointer m-2"><GoLightBulb className="mx-2"/> Courses</li>
      <li className="flex items-center hover:cursor-pointer m-2"><SiYoutubegaming className="mx-2"/> Gaming</li>
    </ul>
    </div>

    </div>
    
  )
}

export default Sidebar;
