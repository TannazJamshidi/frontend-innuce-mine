import "./Navbar.css";
import { NavItem } from "./NavItem";
import { useLocation } from "react-router-dom";
import logoW from "../../assets/inNuceWhite.svg";
import logoB from "../../assets/inNuceBW.svg";

import { useState, useEffect } from "react";

const navigationItems = [
  { label: "HOME", to: "/" },
  {
    label: "SERVICES",
    hasDropdown: true,
    parentTo: "/services",
    dropdownLinks: [
      { label: "INFRASTRUCTURES", to: "/infrastructures" },
      { label: "USE CASES", to: "/usecases" },
    ],
  },
  { label: "RESEARCH", to: "" },
  { label: "ABOUT US", to: "" },
];

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); // Set background to blue when scrolled
    } else {
      setScrolled(false); // Reset to transparent when at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img
        loading="lazy"
        src={scrolled ? logoW : logoB}
        className="logo"
        alt="InNUCE Logo"
      />
      <div className={`LinksContainer ${menuOpen ? "show" : ""}`}>
        {navigationItems.map((item, index) => {
          const isActive =
            location.pathname === item.to ||
            item.dropdownLinks?.some((link) =>
              location.pathname.startsWith(link.to)
            ) ||
            (item.parentTo && location.pathname.startsWith(item.parentTo));

          return <NavItem key={index} {...item} isActive={!!isActive} />;
        })}
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>

      <button className="accessButton">ACCESS APP</button>
    </nav>
  );
};
