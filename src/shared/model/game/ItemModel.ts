export interface Item {
  name: string;
  type: ItemType;
}

export interface Weapon extends Item {
  type: ItemType.WEAPON;
}

export interface Clothing extends Item {
  type: ItemType.CLOTHING;
  clothingType: ClothingType;
}

export enum ItemType {
  CONSUMABLE = 'CONSUMABLE',
  CLOTHING = 'CLOTHING',
  WEAPON = 'WEAPON',
  KEY_ITEM = 'KEY_ITEM',
}

export enum ClothingType {
  HEAD = 'HEAD',
  BODY = 'BODY',
  UNDERWEAR = 'UNDERWEAR',
  ACCESSORY = 'ACCESSORY',
}
