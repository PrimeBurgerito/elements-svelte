<script lang="ts">
  import type { LocationDto } from '../../../../shared/model/game/LocationModel';
  import { MEDIA_URL } from '../../../../shared/Paths';
  import LocationChangePopup from './component/LocationChangePopup.svelte';

  export let location: LocationDto;
  let imageName: string = location && location.images[Math.floor(Math.random() * location.images.length)].fileName;
  let {nearbyLocations} = location;
  let locationChangeOpen = false;
</script>

<div class="h-full text-center">
  <img src={`${MEDIA_URL}/${imageName}`} alt="No image..." on:click={() => locationChangeOpen = true} />
  {#if locationChangeOpen}
    <LocationChangePopup on:close={() => locationChangeOpen = false} locationNames={nearbyLocations} />
  {/if}
</div>

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: pointer;
  }
</style>
