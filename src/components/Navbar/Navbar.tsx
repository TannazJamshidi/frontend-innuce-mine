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
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // aboutus and publiciations page has the scrolled style navbar for better visual clearity

  const handleScroll = () => {
    if (
      location.pathname !== "/aboutus" &&
      location.pathname !== "/publications" &&
      window.scrollY > 50
    ) {
      setScrolled(true);
    } else if (
      location.pathname !== "/aboutus" &&
      location.pathname !== "/publications"
    ) {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (
      location.pathname === "/aboutus" ||
      location.pathname === "/publications"
    ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

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
