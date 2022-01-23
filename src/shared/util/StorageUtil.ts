import type { Realm } from '../model/game/RealmModel';

const REALM_KEY = 'elements-game-realm';

export class StorageUtil {
  public static get realm(): Realm {
    const realm = localStorage.getItem(REALM_KEY);
    return realm ? JSON.parse(realm) : null;
  }

  public static set realm(value: Realm) {
    localStorage.setItem(REALM_KEY, JSON.stringify(value));
  }
}
