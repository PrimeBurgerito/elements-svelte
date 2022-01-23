<script lang="ts">
  import { useNavigate } from 'svelte-navigator';
  import { onMount } from 'svelte';
  import type { Realm } from '../../shared/model/game/RealmModel';
  import RealmApi from '../../shared/api/RealmApi';
  import { selectedRealm } from '../../shared/store/RealmStore';
  import { StorageUtil } from '../../shared/util/StorageUtil';

  let realms: Realm[] = [];

  onMount(async () => {
    realms = await RealmApi.getAll();
  });

  const setNewRealm = (value: Realm) => {
    StorageUtil.realm = value;
    selectedRealm.set(value);
  };

  const navigate = useNavigate();
</script>

<div class="container mx-auto">
  <div class="card w-1/2 mx-auto">
    <div class="grid grid-cols-2 py-5 px-10">
      <div>
        <p>Realms</p>
        <ul class="select-ui">
          {#each realms as realm}
            <li class:active={$selectedRealm?.id === realm.id} on:click={() => setNewRealm(realm)}>{realm.name}</li>
          {/each}
        </ul>
      </div>
      <div class="grid grid-cols-1">
        <button type="button" on:click={() => navigate('character-creation')} disabled={!$selectedRealm}>
          New Character
        </button>
        <button type="button" on:click={() => navigate('game')} disabled={!$selectedRealm}>
          Game
        </button>
      </div>
    </div>
  </div>
</div>
