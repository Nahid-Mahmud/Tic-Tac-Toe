/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";

function Squire({ value, onSquireClick }) {
  return (
    <Fragment>
      <button onClick={onSquireClick} className=" bg-white border border-gray-700 h-20 w-20 m-1 leading-9 text-lg ">
        {value}
      </button>
    </Fragment>
  );
}

export default function Board() {
  const [squires, setSquires] = useState(Array(9).fill(null));
  const handleClick = (index) => {
    // console.log("clicked");
    const nextSquires = squires.slice();
    nextSquires[index] = "X";
    setSquires(nextSquires);
    // console.log(squires);
  };
  return (
    <Fragment>
      <div className="flex">
        <Squire value={squires[0]} onSquireClick={() => handleClick(0)} />
        <Squire value={squires[1]} onSquireClick={() => handleClick(1)} />
        <Squire value={squires[2]} onSquireClick={() => handleClick(2)} />
      </div>

      <div className="flex">
        <Squire value={squires[3]} onSquireClick={() => handleClick(3)} />
        <Squire value={squires[4]} onSquireClick={() => handleClick(4)} />
        <Squire value={squires[5]} onSquireClick={() => handleClick(5)} />
      </div>

      <div className="flex">
        <Squire value={squires[6]} onSquireClick={() => handleClick(6)} />
        <Squire value={squires[7]} onSquireClick={() => handleClick(7)} />
        <Squire value={squires[8]} onSquireClick={() => handleClick(8)} />
      </div>
    </Fragment>
  );
}
