import type { GameStateDto } from '../model/game/GameModel';
import { API } from './Api';

const PATH = '/game-state';

class GameStateApi {
  public static create = async (dto: GameStateDto): Promise<boolean> => {
    const response = await API().post<boolean>(PATH, dto);
    return response.data;
  };
}

export default GameStateApi;
