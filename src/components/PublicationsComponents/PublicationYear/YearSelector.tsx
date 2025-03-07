import React, { useState } from "react";
import YearButton from "./YearButton";
import "./YearSelector.css";

const YearSelector: React.FC = () => {
  const years = ["2024", "2023", "2022", "2021", "2020"];
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleYearClick = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <div className="year-selector" role="group" aria-label="Year selection">
      <div className="year-button-group">
        {years.slice(0, 3).map((year) => (
          <YearButton
            key={year}
            year={year}
            isSelected={year === selectedYear}
            onClick={handleYearClick}
          />
        ))}
      </div>
      <div className="year-button-group">
        {years.slice(3).map((year) => (
          <YearButton
            key={year}
            year={year}
            isSelected={year === selectedYear}
            onClick={handleYearClick}
          />
        ))}
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2ccd9468a1209df8a2b665d5d08932c964e938621fcfacf5f9bae0dfc98ec91?placeholderIfAbsent=true&apiKey=fedf28294640492c8068aacb6f1c1bf6"
        className="arrow-icon"
        alt=""
      />
    </div>
  );
};

export default YearSelector;
