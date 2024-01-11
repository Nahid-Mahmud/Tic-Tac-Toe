import { Fragment, useState } from "react";

function Squire() {
  // state for the value of the button

  const [value, setValue] = useState(null);

  // Button Click Handler
  const handleClick = () => {
    setValue("X");
  };

  return (
    <Fragment>
      <button onClick={handleClick} className=" bg-white border border-gray-700 h-20 w-20 m-1 leading-9 text-lg ">
        {value}
      </button>
    </Fragment>
  );
}

export default function Board() {
  return (
    <Fragment>
      <div className="flex">
        <Squire />
        <Squire />
        <Squire />
      </div>

      <div className="flex">
        <Squire />
        <Squire />
        <Squire />
      </div>

      <div className="flex">
        <Squire />
        <Squire />
        <Squire />
      </div>
    </Fragment>
  );
}
