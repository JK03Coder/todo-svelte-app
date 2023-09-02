<script lang="js">
  import TodoItem from "$lib/TodoItem.svelte";
  export let completedType= false;
  export const todos;
</script>

<ul class="flex flex-col gap-2">
  {#each todos as todo (todo.id)}
    {#if todo.completed === completedType}
      <TodoItem {...todo} />
    {/if}
  {/each}
</ul>
