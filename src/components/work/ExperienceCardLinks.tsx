import ExperienceCardTopics from './ExperienceCardTopics';
import ExperienceCardLink, { type ExperienceCardLinkProps } from './ExperienceCardLink';

export interface ExperienceCardLinksProps {
  links: ExperienceCardLinkProps[];
}

const ExperienceCardLinks: React.FC<ExperienceCardLinksProps> = ({ links }) => (
  <section className="experience-card__group">
    <h4 className="experience-card__group-title">Links</h4>
    <ExperienceCardTopics>
      {links.map(({ url, label }) => (
        <ExperienceCardLink key={url} url={url} label={label} />
      ))}
    </ExperienceCardTopics>
  </section>
);

export default ExperienceCardLinks;
