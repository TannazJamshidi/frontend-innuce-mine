import "./Navbar.css";
import { NavItem } from "./NavItem";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useState } from "react";

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
  {
    label: "ABOUT US",
    hasDropdown: true,
    parentTo: "/aboutus",
    dropdownLinks: [
      { label: "ABOUT US", to: "/aboutus" },
      { label: "PUBLICATIONS", to: "/publications" },
    ],
  },
  { label: "CONTACT US", to: "/contactus" },
];

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img loading="lazy" src={logo} className="logo" alt="InNUCE Logo" />
        <div className="brandName">InNUCE</div>
      </div>

      <div className={`navLinks ${menuOpen ? "show" : ""}`}>
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
