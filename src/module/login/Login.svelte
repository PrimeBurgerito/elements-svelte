<script lang="ts">
  import {UserStore} from '../../shared/store/UserStore';
  import {useLocation, useNavigate} from 'svelte-navigator';

  export let appName: string = 'Elements';
  const navigate = useNavigate();
  const location = useLocation();
  let username = '';
  let password = '';

  $: badInput = !username || !password;

  const login = () => {
    UserStore.login(username, password).then(success => {
      if (success) {
        const from = $location.state?.from || '/';
        navigate(from, {replace: true});
      }
    });
  };
</script>

<div class="container mx-auto">
  <div class="card w-1/2 mx-auto">
    <h1 class="text-gray-200 text-5xl text-center">{appName}</h1>
    <form class="grid grid-cols-1 gap-6">
      <label class="block" for="username">
        <span>Username</span>
        <input
            bind:value={username}
            type="text"
            class="mt-1 block w-full"
            placeholder="Enter username..."
            required
            autocomplete="username"
            id="username">
      </label>
      <label class="block" for="password">
        <span>Password</span>
        <input
            bind:value={password}
            type="password"
            class="mt-1 block w-full"
            placeholder="***"
            required
            autocomplete="current-password"
            id="password">
      </label>
      <button
          type="button"
          disabled={badInput}
          on:click={login}>
        Login
      </button>
    </form>
  </div>
</div>
