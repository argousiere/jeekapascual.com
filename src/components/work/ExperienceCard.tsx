import { Label } from '@argousiere/vespertina-design-system/react';
import ExperienceCardCover, { type ExperienceCardCoverProps } from './ExperienceCardCover';
import DateRangeLabel, { type DateRangeLabelProps } from './DateRangeLabel';

export type ExperienceCardProps = Pick<DateRangeLabelProps, 'startDate' | 'endDate'> & {
  title: string;
  subtitle?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  cover?: ExperienceCardCoverProps;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  subtitle,
  startDate,
  endDate,
  location,
  cover,
  body,
  footer,
}) => {
  const showMeta = location || startDate || endDate;

  return (
    <article className="timeline-item">
      <div className="experience-card">
        <header className="experience-card__header">
          <div className="experience-card__heading">
            <h3 className="experience-card__title">{title}</h3>
            {subtitle && <h4 className="experience-card__subtitle">{subtitle}</h4>}
          </div>

          {showMeta && <div className="experience-card__meta">
            <DateRangeLabel startDate={startDate} endDate={endDate} />

            {location && (
              <Label className="experience-card__location" icon="location" text={location} />
            )}
          </div>}
        </header>

        {cover && <ExperienceCardCover {...cover} />}

        {body && <div className="experience-card__body">{body}</div>}

        {footer && <footer className="experience-card__footer">{footer}</footer>}
      </div>
    </article>
  );
};

export default ExperienceCard;
