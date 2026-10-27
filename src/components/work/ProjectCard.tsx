import ExperienceCard, { type ExperienceCardProps } from './ExperienceCard';
import ExperienceCardLinks from './ExperienceCardLinks';
import type { ExperienceCardLinkProps } from './ExperienceCardLink';

export interface ProjectCardProps extends Pick<ExperienceCardProps, 'startDate' | 'endDate' | 'location'> {
  name: string;
  description: string;
  links?: ExperienceCardLinkProps[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, links = [] }) => (
  <ExperienceCard
    title={name}
    body={<p>{description}</p>}
    footer={links.length > 0 && <ExperienceCardLinks links={links} />}
  />
);

export default ProjectCard;
