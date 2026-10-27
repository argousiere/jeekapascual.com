import ExperienceCard, { type ExperienceCardProps } from './ExperienceCard';
import ExperienceCardSkills from './ExperienceCardSkills';

export interface WorkProject {
  name?: string;
  responsibilities: string[];
}

export type WorkCardProps = Pick<ExperienceCardProps, 'startDate' | 'endDate' | 'location'> & {
  company: string;
  position: string;
  projects: WorkProject[];
  skills?: string[];
}

const WorkCard: React.FC<WorkCardProps> = ({
  company,
  position,
  startDate,
  endDate,
  location,
  projects,
  skills = [],
}) => (
  <ExperienceCard
    title={position}
    subtitle={company}
    startDate={startDate}
    endDate={endDate}
    location={location}
    body={
      projects.length > 0 && (
        <div className="experience-card__projects">

          {projects.map(({ name, responsibilities }) => (
            <section key={name ?? responsibilities[0]} className="experience-card__group">
              {name && <h4 className="experience-card__group-title">{name}</h4>}

              <ul className="experience-card__details">
                {responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>

            </section>
          ))}

        </div>
      )
    }
    footer={skills.length > 0 && <ExperienceCardSkills skills={skills} />}
  />
);

export default WorkCard;
