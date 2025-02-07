export interface SectionProps {
    title: string;
    iconSrc: string;
    content: string;
  }
  
  export interface SummaryAiSectionProps extends SectionProps {
    className?: string;
  }