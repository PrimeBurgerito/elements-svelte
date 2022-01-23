<script lang="ts">
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import type { CharacterTemplate } from '../../../shared/model/game/CharacterModel';
  import { MEDIA_URL } from '../../../shared/Paths';

  export let index: number = 0;
  export let selected: number = 0;
  export let size: number = 0;
  export let template: CharacterTemplate;

  const distance = tweened(0, {duration: 400, easing: cubicOut});
  const scale = tweened(0, {duration: 400, easing: cubicOut});

  $: distance.set(index - selected);
  $: scale.set(1 - Math.abs($distance) * 0.1);
  $: zIndex = size - Math.abs(index - selected);
  $: active = index === selected;

  let imageName = template && (template.images['default']?.fileName || Object.values(template.images)[0]?.fileName);
</script>

<div
    class="card absolute box-border w-2/3"
    class:cursor-pointer={!active}
    style="z-index: {zIndex}; transform: translate(calc(-50% + {$distance * 80}px)) scale({$scale}, {$scale});"
    on:click={() => selected = index}
>
  {#if template}
    <img src={`${MEDIA_URL}/${imageName}`} alt="No image..." />
    <div>
      <h2 class="font-bold">Attributes</h2>
      <div class="framed-gray flex flex-row">
        <ul class="flex-grow">
          {#each template.properties.stringProperties as prop}
            <li><span class="float-left">{prop.name}</span> <span class="float-right">{prop.value.join(' | ')}</span>
            </li>
          {/each}
        </ul>
        <ul class="flex-grow">
          {#each template.properties.numericProperties as prop}
            <li><span class="float-left">{prop.name}</span> <span class="float-right">{prop.value}</span></li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</div>

<style>
  .card {
    top: 10px;
    bottom: 10px;
    left: 50%;
    display: grid;
    grid-template-rows: 70% auto;
    row-gap: 0.4rem
  }

  img {
    max-height: 100%;
    place-self: center;
  }

  li {
    display: flow-root;
  }
</style>
