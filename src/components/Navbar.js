import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/icon.svg";
import { useState } from "react";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery === "") return;
    navigate(`/search/${searchQuery}`);
  };

  const showMenu = () => {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");
  };
  
  return (
    <nav className="sticky top-0 z-10 bg-black px-3 py-3 text-white flex w-full mx-auto md:justify-between justify-center align-baseline">
      <div className="md:hidden order-last ml-auto">
        <button className="text-white" onClick={showMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        className="hidden absolute md:block md:static bg-black w-screen md:w-auto top-[60px]"
        id="menu">
        <ul className="flex justify-between gap-1 py-1 align-baseline flex-col md:flex-row">
          <li>
            <Link
              to="/"
              className="py-1 px-4 rounded-sm hover:bg-blue-400 hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/india"
              className="py-1 px-4 rounded-sm hover:bg-blue-400 hover:text-black">
              India
            </Link>
          </li>
          <li>
            <Link
              to="/usa"
              className="py-1 px-4 rounded-sm hover:bg-blue-400 hover:text-black">
              USA
            </Link>
          </li>
          <li>
            <Link
              to="/crypto"
              className="py-1 px-4 rounded-sm hover:bg-blue-400 hover:text-black">
              Crypto
            </Link>
          </li>
          <li>
            <Link
              to="/calendar"
              className="py-1 px-4 rounded-sm hover:bg-blue-400 hover:text-black">
              Calendar
            </Link>
          </li>
        </ul>
        <div className="flex md:hidden justify-between py-1 px-3 align-middle">
          <input
            placeholder="eg Nifty, Bitcoin, etc."
            className="px-2 py-1 rounded-sm mx-1 text-black flex-grow"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="px-2 py-1 rounded-sm mx-1 bg-blue-600 text-white hover:bg-blue-400 transition-colors"
            onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>
      <div className="justify-items-center items-center lg:mr-32">
        <img src={logo} alt="news-nudge" className="size-9" />
      </div>
      <div className="hidden md:flex justify-between py-1 align-middle">
        <input
          placeholder="eg Nifty, Bitcoin, etc."
          className="px-2 py-1 rounded-sm mx-1 text-black"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="px-2 py-1 rounded-sm mx-1 bg-blue-600 text-white hover:bg-blue-400 transition-colors"
          onClick={handleSearch}>
          SEARCH
        </button>
      </div>
    </nav>
  );
};
