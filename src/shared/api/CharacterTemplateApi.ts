import { get } from 'svelte/store';
import type { CharacterTemplate } from '../model/game/CharacterModel';
import { API } from './Api';
import { selectedRealm } from '../store/RealmStore';

const CHARACTER_TEMPLATE_PATH = '/character-template';

class CharacterTemplateApi {
  public static getAll = async (): Promise<ReadonlyArray<CharacterTemplate>> => {
    const realmId = get(selectedRealm);
    const response = await API().get<ReadonlyArray<CharacterTemplate>>(CHARACTER_TEMPLATE_PATH, {params: {realmId}});
    return response.data;
  };
}

export default CharacterTemplateApi;
