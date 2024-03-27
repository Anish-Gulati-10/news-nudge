import { Link } from "react-router-dom";
import logo from "../assets/icon.svg";
import { useState } from "react";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
        console.log("searching for: ", searchQuery);
  };

  return (
    <nav className="bg-black my-2 px-6 py-3 text-white flex w-4/5 mx-auto justify-between align-baseline rounded-full">
      <div>
        <ul className="flex justify-between gap-1 py-1 align-baseline">
          <li>
            <Link
              to="/"
              className="py-1 px-5 rounded-full hover:bg-lime-200 hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/india"
              className="py-1 px-5 rounded-full hover:bg-lime-200 hover:text-black">
              India
            </Link>
          </li>
          <li>
            <Link
              to="/usa"
              className="py-1 px-5 rounded-full hover:bg-lime-200 hover:text-black">
              USA
            </Link>
          </li>
          <li>
            <Link
              to="/crypto"
              className="py-1 px-5 rounded-full hover:bg-lime-200 hover:text-black">
              Crypto
            </Link>
          </li>
          <li>
            <Link
              to="/calendar"
              className="py-1 px-5 rounded-full hover:bg-lime-200 hover:text-black">
              Calendar
            </Link>
          </li>
        </ul>
      </div>
      <div className="self-center">
        <img src={logo} alt="news-nudge" className="size-9" />
      </div>
      <div className="flex justify-between py-1 align-middle">
        <input
          placeholder="eg Reliance"
          className="px-2 py-0.5 rounded-xl mx-2 text-black"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="px-3 py-0.5 rounded-xl mx-2 bg-color text-black"
          onClick={handleSearch}>
          search
        </button>
      </div>
    </nav>
  );
};
