<script lang="ts">
  import {useNavigate, useLocation} from 'svelte-navigator';
  import {UserStore} from '../store/UserStore';

  const {currentUser, tryRestore} = UserStore;
  const navigate = useNavigate();
  const location = useLocation();

  $: if (!$currentUser) {
    tryRestore().then(restored => {
      if (!restored) {
        navigate('/login', {
          state: {from: $location.pathname},
          replace: true,
        });
      }
    });
  }
</script>

{#if $currentUser}
  <slot />
{/if}
