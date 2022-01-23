<script lang="ts">
  import type { Character } from '../../../../shared/model/game/CharacterModel';
  import { MEDIA_URL } from '../../../../shared/Paths';

  export let character: Character;
  let imageName: string = character && Object.values(character.images)[0].fileName;
</script>

<div class="card h-full grid grid-rows-2">
  <img src={`${MEDIA_URL}/${imageName}`} alt="No image..." />
  <div>stuff</div>
</div>

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
