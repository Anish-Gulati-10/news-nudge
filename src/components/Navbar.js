import { Link } from "react-router-dom";

export const Navbar = () => {
        return (
                <nav className="bg-black p-4 text-white">
                        <ul className="flex justify-around">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/india">India</Link></li>
                                <li><Link to="/usa">USA</Link></li>
                                <li><Link to="/crypto">Crypto</Link></li>
                                <li><Link to="/calendar">Calendar</Link></li>
                        </ul>
                </nav>
        );
}
