<script lang="ts">
  import NewTodoForm from "$lib/NewTodoForm.svelte";
  import TodoList from "$lib/TodoList.svelte";
</script>

<div class="mx-auto max-w-md p-6">
  <NewTodoForm />
  <h1 class="my-2 text-2xl font-medium dark:text-white">Todo List</h1>
  <div class="flex flex-col">
    <TodoList completedType={false}/>
    <hr class="my-6 h-0.5 rounded border-0 bg-gray-300 dark:bg-gray-600" />
    <TodoList completedType={true}/>
  </div>
</div>
