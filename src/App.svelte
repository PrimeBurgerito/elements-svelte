<script lang="ts">
  import {Router, Route} from 'svelte-navigator';
  import MainMenu from './module/main-menu/MainMenu.svelte';
  import Login from './module/login/Login.svelte';
  import Game from './module/game/Game.svelte';
  import PrivateRoute from './shared/component/PrivateRoute.svelte';
  import CharacterCreation from './module/character-creation/CharacterCreation.svelte';

  export let name: string;
</script>

<Router>
  <main>
    <PrivateRoute path="/" let:location>
      <MainMenu />
    </PrivateRoute>
    <Route path="login">
      <Login />
    </Route>
    <PrivateRoute path="game" let:location>
      <Game />
    </PrivateRoute>
    <PrivateRoute path="character-creation" let:location>
      <CharacterCreation />
    </PrivateRoute>
  </main>
</Router>

<style lang="scss" global>
  @import "global";
</style>
