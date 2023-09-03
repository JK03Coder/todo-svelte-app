<script lang="ts">
  // export let id: string;
  export let title: string;
  export let completed: boolean = false;

	
</script>

<li class="flex">
  <label
    class="mr-2 flex-1 cursor-pointer select-none rounded-md border-2 bg-gray-50 px-2.5 py-0.5 text-black shadow shadow-gray-400/40 transition-all hover:bg-gray-100/80 hover:shadow-gray-400/90 dark:bg-white/30 dark:text-white dark:hover:bg-white/40
		{completed ? 'line-through' : ''}"
  >
    <input
      class="mr-1.5 cursor-pointer align-baseline"
      type="checkbox"
      bind:checked={completed}
    />{title}
  </label>
  <button
    type="button"
    class="h-min select-none self-center rounded-md border-2 border-red-500 bg-red-500/50 px-2.5 py-0.5 text-red-500 shadow shadow-red-500/40 transition-all hover:bg-red-500/60 hover:shadow-red-500/90"
    >Delete</button
  >
</li>
