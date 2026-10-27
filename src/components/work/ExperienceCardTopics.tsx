import { Children } from 'react';

export interface ExperienceCardTopicsProps {
  children: React.ReactNode;
}

const ExperienceCardTopics: React.FC<ExperienceCardTopicsProps> = ({ children }) => (
  <ul className="experience-card__topics">
    {Children.map(children, (child) => <li>{child}</li>)}
  </ul>
);

export default ExperienceCardTopics;
