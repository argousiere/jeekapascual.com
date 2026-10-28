import ExperienceCard, { type ExperienceCardProps } from './ExperienceCard';
import ExperienceCardLinks from './ExperienceCardLinks';
import ExperienceCardSkills from './ExperienceCardSkills';
import type { ExperienceCardLinkProps } from './ExperienceCardLink';

export interface ProjectCardProps extends Pick<ExperienceCardProps, 'startDate' | 'endDate' | 'location' | 'cover'> {
  name: string;
  description: string;
  skills?: string[];
  links?: ExperienceCardLinkProps[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, cover, skills = [], links = [] }) => (
  <ExperienceCard
    title={name}
    cover={cover}
    body={<p>{description}</p>}
    footer={
      (skills.length > 0 || links.length > 0) && (
        <>
          {skills.length > 0 && <ExperienceCardSkills skills={skills} />}
          {links.length > 0 && <ExperienceCardLinks links={links} />}
        </>
      )
    }
  />
);

export default ProjectCard;
