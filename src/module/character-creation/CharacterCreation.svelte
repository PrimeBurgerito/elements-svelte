<script lang="ts">
  import { onMount } from 'svelte';
  import { useNavigate } from 'svelte-navigator';
  import CharacterTemplateApi from '../../shared/api/CharacterTemplateApi';
  import CharacterTemplateCard from './component/CharacterTemplateCard.svelte';
  import GameStateApi from '../../shared/api/GameStateApi';
  import type { CharacterTemplate } from '../../shared/model/game/CharacterModel';

  let name = '';
  let selected: number | null = null;
  let characterTemplates: CharacterTemplate[] = [];

  $: isValid = !!name && characterTemplates.length && selected !== null;

  onMount(async () => {
    characterTemplates = await CharacterTemplateApi.getAll();
    if (characterTemplates.length) {
      selected = 0;
    }
  });

  const navigate = useNavigate();
  const create = async () => {
    const success = await GameStateApi.create({
      characterName: name,
      characterTemplateId: characterTemplates[selected].id,
    });

    if (success) {
      navigate('/', {replace: true});
    }
  };
</script>

<div class="container h-full w-2/3 mx-auto flex flex-col">
  <div class="card self-center flex flex-col w-2/3">
    <form>
      <label class="block" for="name">
        <span>Name</span>
        <input
            bind:value={name}
            type="text"
            class="mt-1 block w-full"
            placeholder="Enter characters name..."
            required
            id="name">
      </label>
    </form>
    <button disabled={!isValid} class="self-center" on:click={create}>Create</button>
  </div>
  <div class="relative h-full">
    {#if !characterTemplates.length && selected !== null}
      Loading templates...
    {:else }
      {#each characterTemplates as template, index (template.id)}
        <CharacterTemplateCard bind:selected {template} {index} size={characterTemplates.length}>
          {template.id}
        </CharacterTemplateCard>
      {/each}
    {/if}
  </div>
</div>

<style>
  .card {
    height: fit-content;
  }

  button {
    max-width: 240px;
  }
</style>
