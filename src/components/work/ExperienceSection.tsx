import { Label, type IconName } from '@argousiere/vespertina-design-system/react';

export interface ExperienceSectionProps {
  id: string;
  title: string;
  icon?: IconName;
  children?: React.ReactNode;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  id,
  title,
  icon,
  children,
}) => (
  <section className="experience-section" aria-labelledby={id}>
    <h2 id={id} className="experience-section__title">
      <Label icon={icon} text={title} />
    </h2>
    {children}
  </section>
);

export default ExperienceSection;
