import ExperienceCard from './ExperienceCard';
import ExperienceCardLinks from './ExperienceCardLinks';
import type { ExperienceCardLinkProps } from './ExperienceCardLink';

export interface ResearchCardProps {
  title: string;
  institution: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  links?: ExperienceCardLinkProps[];
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  institution,
  startDate,
  endDate,
  location,
  links = [],
}) => (
  <ExperienceCard
    title={title}
    subtitle={institution}
    startDate={startDate}
    endDate={endDate}
    location={location}
    footer={links.length > 0 && <ExperienceCardLinks links={links} />}
  />
);

export default ResearchCard;
