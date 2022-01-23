import type { Realm } from '../model/game/RealmModel';
import { API } from './Api';

const PATH = '/realm';

export default class RealmApi {
  public static getAll = async (): Promise<ReadonlyArray<Realm>> => {
    const response = await API().get<ReadonlyArray<Realm>>(PATH);
    return response.data;
  };
}
