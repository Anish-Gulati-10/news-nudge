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

  return (
    <nav className="bg-black px-6 py-3 text-white flex w-full mx-auto justify-between align-baseline rounded-full">
      <div>
        <ul className="flex justify-between gap-1 py-1 align-baseline">
          <li>
            <Link
              to="/"
              className="py-1 px-5 rounded-full hover:bg-blue-500 hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/india"
              className="py-1 px-5 rounded-full hover:bg-blue-500 hover:text-black">
              India
            </Link>
          </li>
          <li>
            <Link
              to="/usa"
              className="py-1 px-5 rounded-full hover:bg-blue-500 hover:text-black">
              USA
            </Link>
          </li>
          <li>
            <Link
              to="/crypto"
              className="py-1 px-5 rounded-full hover:bg-blue-500 hover:text-black">
              Crypto
            </Link>
          </li>
          <li>
            <Link
              to="/calendar"
              className="py-1 px-5 rounded-full hover:bg-blue-500 hover:text-black">
              Calendar
            </Link>
          </li>
        </ul>
      </div>
      <div className="justify-items-center mr-32">
        <img src={logo} alt="news-nudge" className="size-9" />
      </div>
      <div className="flex justify-between py-1 align-middle">
        <input
          placeholder="eg Nifty, Bitcoin, etc."
          className="px-2 py-1 rounded-2xl mx-2 text-black"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="px-4 py-1 rounded-2xl mx-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors"
            onClick={handleSearch}>
            SEARCH
          </button>
      </div>
    </nav>
  );
};
