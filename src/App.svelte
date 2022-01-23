<script lang="ts">
  import { Route, Router } from 'svelte-navigator';
  import MainMenu from './module/main-menu/MainMenu.svelte';
  import Login from './module/login/Login.svelte';
  import Game from './module/game/Game.svelte';
  import PrivateRoute from './shared/component/PrivateRoute.svelte';
  import CharacterCreation from './module/character-creation/CharacterCreation.svelte';

  const handleContextMenu = event => event.preventDefault();

  export let name: string;
</script>

<svelte:window on:contextmenu={handleContextMenu} />
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

<!--suppress CssInvalidAtRule -->
<style lang="scss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @import "global";
</style>
