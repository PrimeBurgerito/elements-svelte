import { Writable, writable } from 'svelte/store';
import type { Realm } from '../model/game/RealmModel';
import { StorageUtil } from '../util/StorageUtil';

export const selectedRealm: Writable<Realm> = writable<Realm>(StorageUtil.realm);
