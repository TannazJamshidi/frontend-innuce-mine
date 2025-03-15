import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavItemProps } from "./types";

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
      className={`NavLink ${isActive ? "active" : ""}`} // Add active class when isActive is true
      tabIndex={0}
      role="navigation"
      onMouseEnter={showDropdown} // Show dropdown on hover
      onMouseLeave={hideDropdown} // Hide dropdown on mouse leave
    >
      <Link to={to || "#"} className="LinkLabel">
        {label}
      </Link>
      {hasDropdown && (
        <>
          <svg
            className="dropdownIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 15.5l-6-6 1.4-1.4L12 12.7l4.6-4.6 1.4 1.4z" />
          </svg>

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
