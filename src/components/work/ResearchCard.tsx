import ExperienceCard, { type ExperienceCardProps } from './ExperienceCard';
import ExperienceCardLinks from './ExperienceCardLinks';
import type { ExperienceCardLinkProps } from './ExperienceCardLink';

export type ResearchCardProps = Pick<ExperienceCardProps, 'title' | 'startDate' | 'endDate' | 'location'> & {
  institution: string;
  links?: ExperienceCardLinkProps[];
  children?: React.ReactNode;
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  institution,
  startDate,
  endDate,
  location,
  links = [],
  children,
}) => (
  <ExperienceCard
    title={title}
    subtitle={institution}
    startDate={startDate}
    endDate={endDate}
    location={location}
    body={children}
    footer={links.length > 0 && <ExperienceCardLinks links={links} />}
  />
);

export default ResearchCard;
