<script lang="ts">
  import TodoItem from "$lib/TodoItem.svelte";
  import { todos } from "./stores";
  export let completedType = false;
</script>

<ul class="flex flex-col gap-2" data-flip-id="list-{completedType}">
  {#each $todos as todo, index (todo.id)}
    {#if todo.completed === completedType}
      <TodoItem {...todo} {index} />
    {/if}
  {/each}
</ul>
