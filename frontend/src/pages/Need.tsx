import { useState } from "react";

const Need = () => {
  const [cooked, SetCooked] = useState(false);
  const setCookedStatus =()=>{
    SetCooked(!cooked)
  }
  return (
    <div>
      <div className="mx-auto px-[5vw] max-w-screen-2xl py-5">
        <div className="flex gap-5 justify-between items-start py-4">
          <p className=" font-semibold text-2xl">
            Food, Based on your Location
          </p>
          <span className="bg-gray-300  border-gray-200 whitespace-nowrap  border-4 rounded-full">
            <a onClick={setCookedStatus} className={` rounded-full py-1 px-3 -mr-1 inline-block ${cooked?null:'bg-blue-500 text-white'}`}>
              Raw
            </a>
            <a onClick={setCookedStatus} className={` rounded-full inline-block py-1 px-2  ${cooked?'bg-blue-500 text-white':null}`}>Cooked</a>
          </span>
        </div>

        <div className="bg-orange-50 p-1 inline-block rounded-full">
          <input
            className="p-2 mr-2 rounded-full bg-orange-100"
            type="search"
            name=""
            placeholder="Search Location"
            value=""
          />
          <a className="rounded-full p-3 aspect-square inline-block bg-orange-100">
            <i className="fa-solid block aspect-square fa-magnifying-glass"></i>
          </a>
        </div>
        <div className="h-36"></div>
      </div>
    </div>
  );
};

export default Need;
