import { Icon, Label, type IconName } from '@argousiere/vespertina-design-system/react';

export interface ExperienceCardLinkProps {
  url: string;
  label: string;
  icon?: IconName;
  showExternalIcon?: boolean;
}

const ExperienceCardLink: React.FC<ExperienceCardLinkProps> = ({ url, label, icon, showExternalIcon = true }) => {
  const isExternal = showExternalIcon && /^https?:\/\//.test(url);

  return (
    <a
      className="experience-card__link"
      href={url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <Label icon={icon} text={label} />
      {isExternal && <Icon className="experience-card__link-icon" name="external-link" />}
    </a>
  );
};

export default ExperienceCardLink;
