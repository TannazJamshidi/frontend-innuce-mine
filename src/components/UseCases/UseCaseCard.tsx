import React from "react";
import "./UseCases.css";

interface UseCaseCardProps {
  image: string;
  altText: string;
  title: string;
  tags: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  image,
  altText,
  title,
  tags,
}) => {
  return (
    <div className="UcardWrapper">
      <div className="UcardImage">
        <img src={image} alt={altText} className="UcardImg" />
      </div>
      <div className="UcardContent">
        <h3 className="UcardTitle">{title}</h3>
        <p className="UcardTags">{tags}</p>
        <a href="#" className="UcardLink">
          Link to Documentation
        </a>
      </div>
    </div>
  );
};

export default UseCaseCard;
