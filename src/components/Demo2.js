// why we need state variable when we have let --> because state re-reder the component.
import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [x, setX] = useState(0);
  let y = 0;
  const ref = useRef(0); // not like ref =0 but ref = {current : 0}

  console.log("Rendering-1......")

 const i = useRef(null);

//  let i ={
//   current: null,
//  };
  useEffect(()=>{
    i.current = setInterval(() =>{
        console.log("Namaste React ", Math.random());
    }, 1000);

  }, [])

  return (
    <div className="m-4 p-2 bg-slate-200 w-96 h-96 border border-blue-400">
      <div>
        <button
          className="bg-green-200 p-2 m-4"
          onClick={() => {
            setX(x + 1);
            console.log("rendering-2......");
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl"> state = {x} </span>
      </div>
      <div>
        <button
          className="bg-green-200 p-2 m-4"
          onClick={() => {
            y = y + 1;
            console.log("y = ", y);
          }}
        >
          Increase y
        </button>
        <span className="font-bold text-xl"> Let = {y} </span>
      </div>
       <div>
        <button
          className="bg-green-200 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref = ", ref.current)
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl"> Ref = {ref.current} </span>
      </div>

      <button 
      className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg"
      onClick={()=>{
        clearInterval(i.current);
      }}
      > 
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;
