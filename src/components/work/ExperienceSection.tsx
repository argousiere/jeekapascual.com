import { Label, type IconName } from '@argousiere/vespertina-design-system/react';

export type ExperienceSectionTheme = 'education' | 'research' | 'projects';

export interface ExperienceSectionProps {
  id: string;
  title: string;
  icon?: IconName;
  theme?: ExperienceSectionTheme;
  children?: React.ReactNode;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  id,
  title,
  icon,
  theme,
  children,
}) => (
  <section
    className={theme ? `experience-section experience-section--${theme}` : 'experience-section'}
    aria-labelledby={id}
  >
    <h2 id={id} className="experience-section__title">
      <Label icon={icon} text={title} />
    </h2>
    {children}
  </section>
);

export default ExperienceSection;
