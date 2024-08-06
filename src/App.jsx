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
import { FaCodeMerge } from "react-icons/fa6";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="bg-gray-100 flex gap-2 p-2 font-semibold text-gray-600 text-lg shadow items-center">
            <FaCodeMerge />
            <li className="hover:underline">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 hover:text-blue-400"
                    : "hover:text-blue-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:underline">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 hover:text-blue-400"
                    : "hover:text-blue-400"
                }
              >
                About
              </NavLink>
            </li>
            <li className="hover:underline">
              <NavLink
                to="/pages/docs/PWA-Setup"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 hover:text-blue-400"
                    : "hover:text-blue-400"
                }
              >
                PWA Setup
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="content">
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
