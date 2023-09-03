import { writable } from "svelte/store";

interface Todo {
  id: string,
  title: string,
  completed: boolean,
}

function createTodos() {
  const tempTodos: Todo[] = [
    {
      id: crypto.randomUUID(),
      title: "random title",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: "second thing",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: "third item",
      completed: false,
    },
  ]
  // const { subscribe, set, update } = writable([] as Todo[]);
  const { subscribe, set, update } = writable(tempTodos);

  return {
    subscribe,
    addTodo: (title: string) => update((todos: Todo[]) => {
      todos[todos.length] = {
        id: crypto.randomUUID(),
        title,
        completed: false,
      }
      return todos;
    }),

  };
}

export const todos = createTodos();
