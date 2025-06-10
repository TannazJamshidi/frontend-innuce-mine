import React, { useEffect, useState } from "react";
import {
  /*BrowserRouter as Router,*/ Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navigation } from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Infrastructures from "./pages/Infrastructures";
import AboutUs from "./pages/AboutUs";
import Publications from "./pages/Publications";
import UseCasesPage from "./pages/UseCasesPage";
import UseCaseDetailsPage from "./pages/UseCaseDetailsPage";
import FooterContent from "./components/Footer/FooterContent";
import CreditPage from "./pages/CreditPage";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ComingSoonPage from "./pages/ComingSoonPage";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";

const App: React.FC = () => {
  const location = useLocation();
  const [init, setInit] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
      await loadPolygonMaskPlugin(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return <></>; // TODO: return a loading page instead of an empty page
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/infrastructures" element={<Infrastructures />} />
        <Route path="/usecases" element={<UseCasesPage />} />
        <Route path="/usecasesdetails/:slug" element={<UseCaseDetailsPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/research" element={<Publications />} />
        <Route path="/accessapp" element={<ComingSoonPage />} />
        <Route path="/credits" element={<CreditPage />} />
      </Routes>
      <FooterContent></FooterContent>
    </div>
  );
};

export default App;
