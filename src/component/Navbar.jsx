import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
return (
    <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a className="text-blue-800" href="https://www.linkedin.com/in/kunal-kanade-34213a1b2/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </a>
        <a href="https://github.com/KUNALKANADE" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare />
        </a>
        <a className="text-pink-900" href="https://www.instagram.com/kunal_kanade/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
        </a>
    </div>
    </nav>
);
};

export default Navbar;
