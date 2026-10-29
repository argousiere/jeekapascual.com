import { Label, type IconName } from '@argousiere/vespertina-design-system/react';
import Link from '../Link';
import PdfViewer from '../PdfViewer';

export type ExperienceCardLinkProps = {
  label: string;
  icon?: IconName;
  showExternalIcon?: boolean;
} & ({ url: string; pdf?: never } | { pdf: string; url?: never });

const ExperienceCardLink: React.FC<ExperienceCardLinkProps> = ({ url, pdf, label, icon, showExternalIcon = true }) => {
  if (pdf !== undefined) {
    return (
      <PdfViewer className="experience-card__action" src={`/files/${pdf}.pdf`} title={label}>
        <Label icon={icon} text={label} />
      </PdfViewer>
    );
  }

  return (
    <Link
      className="experience-card__link"
      href={url}
      label={label}
      icon={icon}
      showExternalIcon={showExternalIcon}
    />
  );
};

export default ExperienceCardLink;
