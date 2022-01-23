import { TOKEN_STORAGE_KEY, WEBSOCKET_URL } from '../Constants';
import { derived, get, Writable, writable } from 'svelte/store';
import qs from 'qs';
import { selectedRealm } from './RealmStore';
import type { GameAction, GameSession } from '../model/game/GameModel';
import type { Readable } from 'svelte/types/runtime/store';

const gameStateHolder: Writable<GameSession | null> = writable<GameSession>();
export const gameSession: Readable<GameSession | null> = derived(gameStateHolder, g => g);

export class SessionStore {
  private static socket?: WebSocket;

  public static connect = (): boolean => {
    const query = SessionStore.getWsQuery();
    if (!query) {
      return false;
    }

    const url = `${WEBSOCKET_URL}?${qs.stringify(SessionStore.getWsQuery())}`;
    const newSocket = new WebSocket(url);
    newSocket.onopen = SessionStore.onOpen;
    newSocket.onmessage = SessionStore.onMessage;
    newSocket.onclose = SessionStore.onClose;

    SessionStore.socket = newSocket;
    return true;
  };

  private static getWsQuery = (): Record<string, string> | null => {
    const accessToken = sessionStorage.getItem(TOKEN_STORAGE_KEY);
    const realmId = get(selectedRealm).id;
    if (!accessToken || !realmId) {
      return null;
    }

    return {
      access_token: accessToken,
      realm_id: realmId,
    };
  };

  private static onOpen = (ev: Event): any => {
    console.log(`Connected: ${JSON.stringify(ev)}`);
    this.send({type: 'gameState'});
  };

  private static onMessage = (e: MessageEvent<string>) => {
    gameStateHolder.set(JSON.parse(e.data));
  };

  private static onClose = () => {
    console.log('Disconnected');
    gameStateHolder.set(null);
    delete SessionStore.socket;
  };

  public static send = <T extends GameAction>(action: T) => {
    SessionStore.socket?.send(JSON.stringify(action));
  };
}
