import {writable} from 'svelte/store';

export type Module = 'login' | 'game' | 'main-menu' | 'character-creation';

export const currentModule = writable<Module>('login');
