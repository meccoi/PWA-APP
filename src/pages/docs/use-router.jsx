import CardCode from "../../components/cardCode";

function useRouter() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Install React router</h2>

        <div className="space-y-5">
          <div>
            <CardCode card={`npm install react-router-dom`} />
            <code className="text-gray-900  text-sm font-semibold ">or</code>
            <CardCode card={`npm install react-router-dom@latest`} />
          </div>
          <div className="p-14 bg-red-100 shadow rounded">
            <CardCode
              card={`import React from 'react';

const Home = () => {
  return <h2>Home Page</h2>;
};

export default Home;


so on...about.jsx, contact.jsx
`}
            />
          </div>
          <span className="text-gray-900 italic text-sm">
            # Create a few basic components for demonstration purposes. For
            example, create{" "}
            <code className="font-semibold">
              Home.js, About.js, and Contact.js
            </code>{" "}
            files in your src directory:
          </span>

          <CardCode
            card={`import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} `}
          />

          <span className="text-gray-900 italic text-sm">
            Edit your <code className="font-semibold">`App.js`</code> to include
            the router and define the routes
          </span>

          <div className="p-14 bg-red-100 shadow rounded">
            <CardCode
              card={`// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link, NavLink } from 'react-router-dom'<<<<<<<<<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <NavLink <<<<<<<<<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-blue-500  text-white" : "hover:text-blue-500"
              }
            >
              <HomeIcon />
              <span>Home</span>
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
            ...
          </ul>
        </nav>
        <Routes> <<<<<<<<<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            ...
        </Routes>
      </div>
    </Router>
  );
};

export default App;
`}
            />
          </div>

          <span className="text-gray-900 italic text-sm">
            # Example of using router, routes..
          </span>

          <CardCode card={`npm run dev`} />
          <span className="text-gray-900 italic text-sm">
            # Run your project in development
          </span>
        </div>
      </div>
    </div>
  );
}

export default useRouter;
