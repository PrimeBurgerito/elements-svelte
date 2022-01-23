<script lang="ts">
  import { onMount } from 'svelte';
  import { gameSession, SessionStore } from '../../shared/store/SessionStore';
  import { useNavigate } from 'svelte-navigator';
  import CharacterCard from './component/character-card/CharacterCard.svelte';
  import Event from './component/event/Event.svelte';
  import Location from './component/location/Location.svelte';

  const navigate = useNavigate();

  onMount(() => {
    const success = SessionStore.connect();
    if (!success) navigate('/', {replace: true});
  });
</script>

{#if $gameSession}
  <div class="flex h-full">
    <div class="w-1/4 mr-1 character-card">
      <CharacterCard character={$gameSession.character} />
    </div>
    <div class="flex-1 ml-1">
      {#if $gameSession.event}
        <Event event={$gameSession.event} />
      {:else }
        <Location location={$gameSession.location} />
      {/if}
    </div>
  </div>
{:else}
  Loading...
{/if}

<style>
  .character-card {
    max-width: 500px;
  }
</style>
