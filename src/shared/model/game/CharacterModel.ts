import type { DocumentBase } from './BaseModel';
import type { Image } from './ImageModel';
import type { NumericProperty, StringProperty } from './PropertiesModel';
import type { Clothing, ClothingType, Item, Weapon } from './ItemModel';

export interface CharacterProperties {
  numericProperties: ReadonlyArray<NumericProperty>;
  stringProperties: ReadonlyArray<StringProperty>;
  stringPropertyKeyToValue: Record<string, StringProperty['value']>;
  keyToStringProperty: Record<string, StringProperty>;
  keyToNumericProperty: Record<string, NumericProperty>;
  numericPropertyKeyToValue: Record<string, NumericProperty['value']>;
}

export interface CharacterTemplate extends DocumentBase {
  images: Record<string, Image>;
  properties: CharacterProperties;
}

export interface Character {
  name: string;
  templateId: string;
  images: Record<string, Image>;
  properties: Pick<CharacterProperties, 'numericProperties' | 'stringProperties'>;
  items: Item[];
  equipment: Equipment;
}

export interface Equipment {
  weapon: Weapon;
  clothing: Record<ClothingType, Clothing>;
}
