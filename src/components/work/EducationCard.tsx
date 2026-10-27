import ExperienceCard, { type ExperienceCardProps } from './ExperienceCard';
import ExperienceCardTopics from './ExperienceCardTopics';
import ExperienceCardSkills from './ExperienceCardSkills';

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
    footer={skills.length > 0 && <ExperienceCardSkills skills={skills} />}
  />
);

export default EducationCard;
