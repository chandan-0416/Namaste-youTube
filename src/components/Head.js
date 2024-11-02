import React, { useEffect, useState } from "react"
import { toggleMenu } from "../utils/appSlice"
import { useDispatch, useSelector } from "react-redux"
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { CiSearch } from "react-icons/ci";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery]=useState("");
  const [suggestions , setSuggestions]=useState([]);
  const [showSuggestions, setShowSuggestions]=useState(false);
  
  const searchCache = useSelector((store)=> store.search);
  const dispatch = useDispatch();
  useEffect(()=>{
    const timer = setTimeout(()=> {
      if (searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      } else{
        getSearchSuggestions();
      }
  },200);

  return ()=>{
     clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchQuery]);

  const getSearchSuggestions= async()=>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
  
    setSuggestions(json[1]);
    // update cache
    dispatch(
      cacheResults({
      [searchQuery]: json[1],
    })
  );
  };

    const toggleMenuHandler =()=>{
        dispatch(toggleMenu());
    };
  return ( 
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1"> 
        <img 
        onClick={()=>toggleMenuHandler()}
        className="h-8 cursor-pointer"
        alt="menu" 
        src="https://static.vecteezy.com/system/resources/thumbnails/044/423/506/small/menu-icon-for-uiux-web-app-infographic-etc-vector.jpg"
         />
         <a href="/">
        <img 
        className="h-8"
        alt="youtube-logo" 
        src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
        />
        </a>
      </div>
      <div className="col-span-10 px-10">
      <div className="flex">
        <input 
        className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
         type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
         />
        <button className="border border-gray-400 px-5 py-3 rounded-r-full bg-gray-100">
        <CiSearch className="size-5" />
        </button>
        </div>
       { showSuggestions && (<div className="fixed bg-white py-2 px-2 w-[31rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
          {suggestions.map((s)=>(
            <li key={s} className="flex font-semibold shadow-sm hover:bg-gray-100"> 
            <CiSearch className="mx-2 my-2 size-4" /> {s} 
            </li>
             ))}
           
          </ul>
        </div>)}
      </div>
      <div className="col-span-1">
        <img 
        className="h-8"
        alt="user" 
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
      </div>
    </div>
  )
}
export default Head;
