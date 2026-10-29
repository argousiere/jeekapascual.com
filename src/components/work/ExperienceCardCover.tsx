import { AspectRatio } from '@argousiere/vespertina-design-system/core';
import { Image } from '@argousiere/vespertina-design-system/react';
import { BLOG_IMAGE_TRANSFORM, imageUrl } from '../../utils/image-utils';

export interface ExperienceCardCoverProps {
  src: string;
  alt?: string;
}

const ExperienceCardCover: React.FC<ExperienceCardCoverProps> = ({ src, alt = '' }) => (
  <Image
    className="experience-card__cover"
    image={{ src: imageUrl(src, BLOG_IMAGE_TRANSFORM), alt }}
    aspectRatio={AspectRatio.WIDESCREEN}
  />
);

export default ExperienceCardCover;
