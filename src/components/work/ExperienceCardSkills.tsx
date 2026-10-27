import TechnologyChip from './TechnologyChip';

export interface ExperienceCardSkillsProps {
  skills: string[];
}

const ExperienceCardSkills: React.FC<ExperienceCardSkillsProps> = ({ skills }) => (
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
);

export default ExperienceCardSkills;
