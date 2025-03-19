export interface FacilityCardProps {
  title: string;
  description: string;
  boldKeywords: string[];
  iconSRC: string;
}

export interface LabFacilitiesProps {
  facilities?: Array<{
    title: string;
    description: string;
    boldKeywords: string[];
    iconSRC: string;
  }>;
}