import type {User} from '../model/User';
import UserApi from '../api/UserApi';
import {derived, Readable, Writable} from 'svelte/store';
import {writable} from 'svelte/store';

class Store {
  private _currentUser: Writable<User | null> = writable<User | null>(null);

  public tryRestore = async (): Promise<boolean> => {
    const user = await UserApi.get();
    if (user) {
      this._currentUser.set(user);
      return true;
    }
    return false;
  };

  public login = async (username: string, password: string): Promise<boolean> => {
    const user = await UserApi.login(username, password);
    if (user) {
      this._currentUser.set(user);
      return true;
    } else {
      console.error('Login failed!');
      return false;
    }
  };

  public get currentUser(): Readable<User | null> {
    return derived(this._currentUser, user => user);
  }
}

export const UserStore = new Store();
