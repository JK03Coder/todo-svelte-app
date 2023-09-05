<script lang="ts">
  import { todos } from "./stores";

  let todoValue: string = "";

  function handleNewTodo() {
    if (todoValue.trim() === "") return;
    todos.add(todoValue);
    todoValue = "";
  }
</script>

<form class="flex flex-col gap-2 mb-6" on:submit|preventDefault={handleNewTodo}>
  <div>
    <label class="my-1 block py-0.5 dark:text-white" for="item">New Todo</label>
    <input
      class="w-full rounded-md border-2 border-blue-400 bg-blue-400/50 py-0.5 pl-1.5 text-black shadow shadow-blue-400/40 outline-none transition-all placeholder:text-blue-400 focus:shadow-blue-400/90 dark:text-white"
      type="text"
      id="item"
      placeholder="add a todo"
      bind:value={todoValue}
    />
  </div>
  <button
    class="select-none rounded-md border-2 border-blue-500 bg-blue-500/50 py-0.5 font-semibold text-blue-500 shadow shadow-blue-500/40 transition-all hover:bg-blue-500/60 hover:shadow-blue-500/90"
    type="submit"
    >Add
  </button>
  <!-- <button
    class="select-none w-20 rounded-md border-2 border-violet-500 bg-violet-500/50 py-0.5 font-semibold text-violet-500 shadow shadow-violet-500/40 transition-all hover:bg-violet-500/60 hover:shadow-violet-500/90"
    type="button"
    on:click={todos.clearTodos}
    >Clear
  </button> -->
</form>
