import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import PWA from "./pages/docs/PWA-Setup";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { CgFileDocument } from "react-icons/cg";
import { useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { RiArrowUpWideFill } from "react-icons/ri";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  document.addEventListener("click", function (e) {
    if (e.target.className === "bg") {
      toggleSidebar();
    }
  });

  const [toggle, setToggle] = useState(false);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  return (
    <Router>
      <div>
        <nav className="sticky top-0 bg-gray-100 h-14 shadow flex items-center px-6 z-20">
          <RxHamburgerMenu
            size={20}
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
          <ul
            style={
              toggle
                ? { transform: "translateX(-25px)" }
                : { transform: "translateX(-350px)" }
            }
            className="bg-gray-100 sidebar__ h-screen absolute top-0 flex flex-col py-8 font-semibold text-gray-600 text-base shadow items-start duration-300 transition-transform"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-blue-500  text-white" : "hover:text-blue-500"
              }
            >
              <FaHome />
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "bg-blue-500  text-white" : "hover:text-blue-500"
              }
            >
              <SiAboutdotme />
              <span>About</span>
            </NavLink>

            <button
              onClick={() => setOpen(!isOpen)}
              className="hover:text-blue-400 font-semibold justify-between"
            >
              <div className="flex gap-4 items-center">
                <CgFileDocument />
                Docs
              </div>
              {isOpen ? <RiArrowUpWideFill /> : <RiArrowDownWideFill />}
            </button>
            {isOpen && (
              <ul className="w-full">
                <li className="w-full">
                  <NavLink
                    to="/pages/docs/PWA-Setup"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-500  text-white"
                        : "hover:text-blue-500"
                    }
                    style={{ paddingLeft: "56px" }}
                  >
                    PWA Setup
                  </NavLink>
                </li>
              </ul>
            )}
          </ul>
        </nav>
        <div className="content">
          {toggle && <div className="bg"></div>}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pages/docs/PWA-Setup" element={<PWA />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
