<script lang="ts">
  import NewTodoForm from '$lib/NewTodoForm.svelte';
  import TodoList from '$lib/TodoList.svelte';
  import { animSpeed, firstLoad, todos } from '$lib/stores';
  import { fade } from 'svelte/transition';
  import { afterUpdate, beforeUpdate, onMount } from 'svelte';
  // @ts-ignore
  import { gsap } from 'gsap/dist/gsap';
  // @ts-ignore
  import { Flip } from 'gsap/dist/Flip';
  import { afterNavigate } from '$app/navigation';

  gsap.registerPlugin(Flip);

  let state: Flip.FlipState;
  let isState: boolean = true;

  beforeUpdate(() => {
    if (isState) {
      state = Flip.getState('hr, li');
      isState = false;
    }
  });

  afterNavigate(({ from }) => {
    console.log($firstLoad, from)
    $firstLoad = false;
  })

  afterUpdate(() => {
    isState = true;
    Flip.from(state, {
      targets: 'hr, li',
      duration: $animSpeed/1000,
      ease: 'elastic(1, 0.7).out',
    });
  });
</script>

<svelte:head>
  <title>Todo List</title>
</svelte:head>

<div class="mx-auto max-w-md p-6">
  <NewTodoForm />
  <h1 class="my-2 text-2xl font-medium dark:text-white">Todo List</h1>
  <div class="flex flex-col">
    <TodoList completedType={false} />
    {#if !$todos.some((todo) => !todo.completed)}
      <p
        class="dark:text-white"
        in:fade={{ duration: $animSpeed }}
        out:fade={{ duration: 0 }}
      >
        You have nothing to do
      </p>
    {/if}
    {#if $todos.some((todo) => todo.completed)}
      <hr
        class="my-6 h-0.5 rounded border-0 bg-gray-300 dark:bg-gray-600"
        data-flip-id="line"
        transition:fade={{ duration: $animSpeed }}
      />
    {/if}
    <TodoList completedType={true} />
  </div>
</div>
