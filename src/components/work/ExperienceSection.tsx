import { useState } from 'react';
import { ButtonLevel, Label, ViewModeSwitcher, type IconName } from '@argousiere/vespertina-design-system/react';

export type ExperienceSectionTheme = 'education' | 'research' | 'projects';

export enum ExperienceViewMode {
  GRID = 'grid',
  TIMELINE = 'timeline',
}

const themeLevels: Record<ExperienceSectionTheme, ButtonLevel> = {
  education: ButtonLevel.INFO,
  research: ButtonLevel.SUCCESS,
  projects: ButtonLevel.SPECIAL,
};

export interface ExperienceSectionProps {
  id: string;
  title: string;
  icon?: IconName;
  theme?: ExperienceSectionTheme;
  viewMode?: ExperienceViewMode;
  children?: React.ReactNode;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  id,
  title,
  icon,
  theme,
  viewMode,
  children,
}) => {
  const [view, setView] = useState(viewMode ?? ExperienceViewMode.GRID);

  return (
    <section
      className={[
        'experience-section',
        theme && `experience-section--${theme}`,
        `experience-section--${view}`,
      ].filter(Boolean).join(' ')}
      aria-labelledby={id}
    >
      <header className="experience-section__header">
        <h2 id={id} className="experience-section__title">
          <Label icon={icon} text={title} />
        </h2>

        {!viewMode && (
          <ViewModeSwitcher<ExperienceViewMode>
            options={[
              { value: ExperienceViewMode.GRID, label: 'Grid', icon: 'grid' },
              { value: ExperienceViewMode.TIMELINE, label: 'Timeline', icon: 'list' },
            ]}
            value={view}
            level={theme && themeLevels[theme]}
            onValueChange={setView}
          />
        )}
      </header>

      <div className="experience-section__items">{children}</div>
    </section>
  );
};

export default ExperienceSection;
