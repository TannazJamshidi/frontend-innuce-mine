import "./Navbar.css";
import { NavItem } from "./NavItem";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

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
  { label: "NEWS", to: "/news" },
];

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img loading="lazy" src={logo} className="logo" alt="InNUCE Logo" />
        <div className="brandName">InNUCE</div>
      </div>
      <div className="navLinks">
        {navigationItems.map((item, index) => {
          const isActive =
            location.pathname === item.to || // Exact match for direct routes
            item.dropdownLinks?.some((link) =>
              location.pathname.startsWith(link.to)
            ) || // Matches any dropdown link
            (item.parentTo && location.pathname.startsWith(item.parentTo)); // Matches parent for subroutes

          return (
            <NavItem
              key={index}
              {...item} // Pass all item props
              isActive={!!isActive} // Pass isActive as boolean
            />
          );
        })}
      </div>
      <button className="accessButton">ACCESS APP</button>
    </nav>
  );
};
