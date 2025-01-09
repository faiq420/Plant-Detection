import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-[#ffffff20] fixed top-0 z-50 text-white p-4 flex justify-between items-center w-full">
      <div
        className="text-lg font-bold cursor-pointer flex items-center"
        onClick={() => {
          navigate("/");
        }}
      >
        {/* <img
          src="/path/to/AgriVision_Logo_With_Contrast.png"
          alt="AgriVision Logo"
          className="h-8 w-auto mr-2"
        /> */}
        <span>AgriVision</span>
      </div>
      <nav>
        <ul className="flex space-x-4 text-sm ">
          <li className="relative group">
            <Link to="/IdentifyPlant" className="pb-4 text-white">
              Identify Vegetation
              <span className="absolute left-1/2 -bottom-4 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-500 ease-in-out"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link to="/DetectDisease" className="pb-4 text-white">
              Detect Disease
              <span className="absolute left-1/2 -bottom-4 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-500 ease-in-out"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
