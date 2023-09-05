<script lang="ts">
  import NewTodoForm from "$lib/NewTodoForm.svelte";
  import TodoList from "$lib/TodoList.svelte";
  import { animSpeed, todos } from "$lib/stores";
  import { slide } from "svelte/transition";
</script>

<div class="mx-auto max-w-md p-6">
  <NewTodoForm />
  <h1 class="my-2 text-2xl font-medium dark:text-white">Todo List</h1>
  <div class="flex flex-col">
    <TodoList completedType={false} />
    {#if !$todos.some((todo) => !todo.completed)}
      <p class="dark:text-white" transition:slide={{ duration: $animSpeed }}>You have nothing to do</p>
    {/if}
    {#if $todos.some((todo) => todo.completed)}
      <hr class="my-6 h-0.5 rounded border-0 bg-gray-300 dark:bg-gray-600" transition:slide={{ duration: $animSpeed }}/>
    {/if}
    <TodoList completedType={true} />
  </div>
</div>
