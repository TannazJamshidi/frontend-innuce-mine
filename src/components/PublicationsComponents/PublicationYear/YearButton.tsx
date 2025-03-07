import React from "react";
import "./YearSelector.css";

interface YearButtonProps {
  year: string;
  isSelected: boolean;
  onClick: (year: string) => void;
}

const YearButton: React.FC<YearButtonProps> = ({
  year,
  isSelected,
  onClick,
}) => {
  return (
    <button
      className={`year-button ${isSelected ? "selected-year" : ""}`}
      aria-pressed={isSelected}
      onClick={() => onClick(year)}
    >
      {year}
    </button>
  );
};

export default YearButton;
