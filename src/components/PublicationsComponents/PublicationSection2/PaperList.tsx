import React, { useState } from "react";
import PublishedPaper from "./PublishedPaper";
import { SummaryAi } from "./SummaryAi";
import "./PaperList.css";
import CloseVector from "../../../assets/closeVector.svg";

interface Paper {
  id: string;
  title: string;
  keywords: string;
}

const PaperList: React.FC = () => {
  const [checkedPapers, setCheckedPapers] = useState<Set<string>>(new Set());
  const [simplifiedPaperId, setSimplifiedPaperId] = useState<string | null>(
    null
  ); // State to track simplified paper

  const papers: Paper[] = [
    {
      id: "1",
      title:
        "Natively Neuromorphic LMU Architecture for Encoding-Free SNN-Based HAR on Commercial Edge Devices",
      keywords:
        "Neuromorphic computing · Edge devices · IoT · Encoding-free · LIF neurons · Legendre memory unit",
    },
    {
      id: "2",
      title:
        "Efficient Deep Learning Models for Object Recognition in Edge Devices",
      keywords: "Deep learning · Edge devices · Object recognition · AI",
    },
    {
      id: "3",
      title: "A Comprehensive Review of AI Applications in Healthcare",
      keywords: "AI · Healthcare · Review · Medical technology",
    },
    {
      id: "4",
      title: "Towards Energy-Efficient AI Models in IoT Devices",
      keywords: "Energy-efficient AI · IoT · Edge computing · Neural networks",
    },
  ];

  const handleCheck = (paperId: string) => {
    setCheckedPapers((prev) => {
      const newChecked = new Set(prev);
      if (newChecked.has(paperId)) {
        newChecked.delete(paperId);
      } else {
        newChecked.add(paperId);
      }
      return newChecked;
    });
  };

  const handleOpenPaper = (paperId: string) => {
    window.open(`/paper/${paperId}`, "_blank");
  };

  const handleSimplify = (paperId: string) => {
    setSimplifiedPaperId(paperId); // Set the simplified paper ID
  };

  const handleCloseSummary = () => {
    setSimplifiedPaperId(null); // Reset to null to close the summary
  };

  return (
    <div className="paper-list">
      {simplifiedPaperId ? (
        // Show the SummaryAi component when simplifiedPaperId is set
        <div className="summary-container">
          <img
            loading="lazy"
            src={CloseVector}
            onClick={handleCloseSummary}
            alt=""
          />

          <SummaryAi />
        </div>
      ) : (
        // Show the list of papers
        <>
          {papers.map((paper) => (
            <PublishedPaper
              key={paper.id}
              title={paper.title}
              keywords={paper.keywords}
              openPaperText="OPEN PAPER"
              simplifyText="SIMPLIFY IT"
              onOpenPaper={() => handleOpenPaper(paper.id)}
              onSimplify={() => handleSimplify(paper.id)}
              onCheck={() => handleCheck(paper.id)}
              isChecked={checkedPapers.has(paper.id)}
            />
          ))}
          <div className="iconEx-Nx">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/fedf28294640492c8068aacb6f1c1bf6/f07ffa755e64288d4ef807c2698a7b2c5a138184fb23c98615d55a4e11a6834f?apiKey=fedf28294640492c8068aacb6f1c1bf6&"
              alt="First icon"
              className="Flashicon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/fedf28294640492c8068aacb6f1c1bf6/47f2e728b240fe2f92b9d8c0d68aca04a944c1c0a10601d648e17ca4e3181404?apiKey=fedf28294640492c8068aacb6f1c1bf6&"
              alt="Second icon"
              className="Flashicon"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PaperList;
