<script lang="ts">
  import TodoItem from "$lib/TodoItem.svelte";
  import { todos } from "./stores";
  export let completedType = false;
</script>

<ul class="flex flex-col gap-2">
  {#each $todos as todo (todo.id)}
    {#if todo.completed === completedType}
      <TodoItem {...todo} />
    {/if}
  {/each}
</ul>
