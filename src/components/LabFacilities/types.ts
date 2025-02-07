export interface FacilityCardProps {
    title: string;
    description: string;
  }
  
  export interface LabFacilitiesProps {
    facilities?: Array<{
      title: string;
      description: string;
    }>;
  }