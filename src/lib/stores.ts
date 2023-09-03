import { writable } from "svelte/store";

interface Todo {
  id: string,
  title: string,
  completed: boolean,
}

function createTodos() {
  const { subscribe, set, update } = writable([] as Todo[]);

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
    setCompleted: (id: string, completed: boolean) => update((todos: Todo[]) => {
      const index = todos.findIndex(todo => todo.id === id);
      todos[index].completed = completed;
      return todos
    }),
    deleteTodo: (id: string) => update((todos: Todo[]) => {
      const index = todos.findIndex(todo => todo.id === id);
      todos.splice(index, 1);
      return todos
    }),
    clearTodos: () => set([]),
  };
}

export const todos = createTodos();
