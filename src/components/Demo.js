import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

 // console.log("Rendering....");

  // heavy operation
 // const prime = findPrime(text);

 const prime = useMemo(() => findPrime(text), [text]);
  // console.log("Rendering....");

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className=" m-10 p-2 bg-green-400"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className=" mt-4 border border-black w-72 px-2 text-black"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <h1 className="mt-3 font-bold text-xl">nth Prime : {prime} </h1>
      </div>
    </div>
  );
};
export default Demo;
