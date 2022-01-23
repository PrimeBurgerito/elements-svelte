import type { Image } from './ImageModel';
import type { Requirement } from './RequirementModel';

export interface LocationDto {
  name: string;
  nearbyLocation: ReadonlyArray<string>;
  images: ReadonlyArray<Image>;
  requirement?: Requirement;
}
