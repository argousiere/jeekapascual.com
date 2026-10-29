import type { ComponentProps } from 'react';
import { Icon, Label, type IconName } from '@argousiere/vespertina-design-system/react';

export interface LinkProps extends ComponentProps<'a'> {
  href: string;
  label?: string;
  icon?: IconName;
  external?: boolean;
  showExternalIcon?: boolean;
}

const Link: React.FC<LinkProps> = ({
  href,
  label,
  icon,
  external,
  showExternalIcon = true,
  className,
  children,
  ...props
}) => {
  const isExternal = showExternalIcon && (external ?? /^https?:\/\//.test(href));

  return (
    <a
      {...props}
      className={className ? `app-link ${className}` : 'app-link'}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {label ? <Label icon={icon} text={label} /> : children}
      {isExternal && <Icon className="app-link__icon" name="external-link" />}
    </a>
  );
};

export default Link;
