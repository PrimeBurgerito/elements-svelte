<script lang="ts">
  import {useNavigate} from 'svelte-navigator';
  import {UserStore} from '../../shared/store/UserStore';

  const navigate = useNavigate();
  const {currentUser} = UserStore;
</script>

<div class="container mx-auto">
  <div class="card w-1/2 mx-auto">
    <pre>{JSON.stringify($currentUser)}</pre>
    <button type="button" on:click={() => navigate('character-creation')}>
      New Character
    </button>
  </div>
</div>
