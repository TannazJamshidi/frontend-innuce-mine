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
              simplifyText="IN NUTSHELL"
              onOpenPaper={() => handleOpenPaper(paper.id)}
              onSimplify={() => handleSimplify(paper.id)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default PaperList;
