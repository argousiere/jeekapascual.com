import ExperienceCard, { type ExperienceCardProps } from './ExperienceCard';
import ExperienceCardTopics from './ExperienceCardTopics';
import TechnologyChip from './TechnologyChip';

export type EducationCardProps = Pick<ExperienceCardProps, 'startDate' | 'endDate' | 'location'> & {
  institution: string;
  degree: string;
  startDate: string;
  coursework?: string[];
  skills?: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  startDate,
  endDate,
  location,
  coursework = [],
  skills = [],
}) => (
  <ExperienceCard
    title={degree}
    subtitle={institution}
    startDate={startDate}
    endDate={endDate}
    location={location}
    body={
      coursework.length > 0 && (
        <section className="experience-card__group">
          <h4 className="experience-card__group-title">Coursework</h4>
          <ExperienceCardTopics>{coursework}</ExperienceCardTopics>
        </section>
      )
    }
    footer={
      skills.length > 0 && (
        <section className="experience-card__group">
          <h4 className="experience-card__group-title">Skills</h4>
          <ul className="technology-chips">
            {skills.map((skill) => (
              <li key={skill}>
                <TechnologyChip technology={skill} />
              </li>
            ))}
          </ul>
        </section>
      )
    }
  />
);

export default EducationCard;
