import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavItemProps } from "./types";
import flashIcon from "../../assets/flash.svg";

export const NavItem: React.FC<NavItemProps & { isActive: boolean }> = ({
  label,
  hasDropdown,
  to,
  dropdownLinks,
  isActive,
}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const showDropdown = () => setDropdownVisible(true);
  const hideDropdown = () => setDropdownVisible(false);

  return (
    <div
      className={`navItem ${isActive ? "active" : ""}`} // Add active class when isActive is true
      tabIndex={0}
      role="navigation"
      onMouseEnter={showDropdown} // Show dropdown on hover
      onMouseLeave={hideDropdown} // Hide dropdown on mouse leave
    >
      <Link to={to || "#"} className="navLabel">
        {label}
      </Link>
      {hasDropdown && (
        <>
          <img
            loading="lazy"
            src={flashIcon}
            className="dropdownIcon"
            alt="Dropdown Icon"
          />
          {isDropdownVisible && (
            <div
              className="dropdownMenu"
              onMouseEnter={showDropdown} // Keep dropdown visible on hover
              onMouseLeave={hideDropdown} // Hide dropdown on mouse leave
            >
              {dropdownLinks?.map((link, index) => (
                <Link key={index} to={link.to} className="dropdownLink">
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
