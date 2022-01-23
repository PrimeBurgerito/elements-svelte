import type { Character } from './CharacterModel';
import type { LocationDto } from './LocationModel';

export interface GameStateDto {
  characterTemplateId: string;
  characterName: string;
}

export interface GameSession {
  location: LocationDto,
  event?: any,
  character: Character,
}

type GameActionType = 'gameState' | 'changeLocation';

export interface GameAction {
  type: GameActionType,
}

export interface GameLocationAction extends GameAction {
  type: 'changeLocation',
  name: string,
}
