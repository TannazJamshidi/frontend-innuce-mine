export interface NavItemProps {
  label: string;
  hasDropdown?: boolean; // Indicates if the item has a dropdown
  to?: string; // Navigation target for non-dropdown items
  dropdownLinks?: { label: string; to: string }[]; // Dropdown links
  parentTo?: string; // Parent path for dropdowns
}

export interface NavLinkProps extends NavItemProps {
  to: string; // Ensure 'to' is mandatory in NavLinkProps
}
