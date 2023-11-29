import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const date = new Date();
  const dateStr = date.toDateString();
  const [day, mon, datee, year] = dateStr.split(" ");

  return (
    <div className="flex flex-col justify-between py-4 px-2 h-[250px] w-[150px] shadow-md rounded-xl text-center items-center">
      <div className="flex flex-col">
        <h1 className="text-5xl font-semibold">{datee}</h1>
        <div className="flex gap-1 font-medium">
          <h4>{mon}</h4>
          <h4>{year}</h4>
        </div>
        <h4 className="font-medium">{day}</h4>
      </div>
      <Link to='/addTask'>
        <IoAddCircleOutline size={38} className="font-bold" />
      </Link>
    </div>
  );
};

export default Sidebar;
