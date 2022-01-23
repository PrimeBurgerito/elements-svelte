<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  import { SessionStore } from '../../../../../shared/store/SessionStore';

  export let locationNames: string[] = [];

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');
  const changeLocation = (name: string) => {
    SessionStore.send({type: 'changeLocation', name});
    close();
  };
</script>

<div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
>
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div transition:fade={{duration: 100}} class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
         aria-hidden="true"></div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <div transition:fade={{duration: 200}}
         class="card inline-block overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
        {#each locationNames as name}
          <button on:click={() => changeLocation(name)}>{name}</button>
        {/each}
      </div>
    </div>
  </div>
</div>
