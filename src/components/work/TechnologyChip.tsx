import { Label } from '@argousiere/vespertina-design-system/react';

export interface TechnologyChipProps {
  technology: string;
}

const TechnologyChip: React.FC<TechnologyChipProps> = ({ technology }) => (
  <Label className="technology-chip" text={technology} />
);

export default TechnologyChip;
