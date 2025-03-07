import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navigation } from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Infrastructures from "./pages/Infrastructures";
import AboutUs from "./pages/AboutUs";
import Publications from "./pages/Publications";
import ContactUs from "./pages/ContactUs";
import UseCasesPage from "./pages/UseCasesPage";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Infrastructures" element={<Infrastructures />} />
        <Route path="/UseCases" element={<UseCasesPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Publications" element={<Publications />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
