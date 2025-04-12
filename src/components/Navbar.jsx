import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed flex justify-between items-center w-full h-20 px-20 bg-white border-b-1 border-gray-200 z-50">
      <div className="text-3xl font-extrabold cursor-pointer text-emerald-700">
        <Link to={"/"}>EventFlow</Link>
      </div>
      <div className="flex gap-20 text-base">
        <div>
          <Link to={"/create"}>Create event</Link>
        </div>
        <div>
          <Link to={"/events"}>All events</Link>
        </div>
        <div>Find my tickets</div>
        <div>Help center</div>
      </div>
    </div>
  );
};

export default Navbar;
