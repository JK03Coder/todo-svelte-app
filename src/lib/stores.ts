import { browser } from '$app/environment';
import type { FlipParams } from 'svelte/animate';
import { get, writable } from 'svelte/store';
import { z } from 'zod';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const TodoSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  completed: z.boolean(),
});

function createTodos() {
  let defaultValue: Todo[] = [];
  if (browser) {
    const tempValue = localStorage.getItem('todos');
    if (tempValue !== null) {
      const parsedValue = JSON.parse(tempValue);
      if (Array.isArray(parsedValue)) {
        defaultValue = parsedValue.filter((value) => {
          const result = TodoSchema.safeParse(value);
          return result.success;
        });
      }
    }
  }
  const { subscribe, set, update } = writable<Todo[]>(defaultValue);
  const store = {
    subscribe,
    add: (title: string) =>
      update((todos: Todo[]) => {
        todos[todos.length] = {
          id: crypto.randomUUID(),
          title,
          completed: false,
        };
        return todos;
      }),
    setCompleted: (id: string, completed: boolean) =>
      update((todos: Todo[]) => {
        const index = todos.findIndex((todo) => todo.id === id);
        todos[index].completed = completed;
        return todos;
      }),
    delete: (id: string) =>
      update((todos: Todo[]) => {
        const index = todos.findIndex((todo) => todo.id === id);
        todos.splice(index, 1);
        return todos;
      }),
    clear: () => set([]),
  };
  return store;
}

export const todos = createTodos();

if (browser) {
  todos.subscribe((todosValue) =>
    localStorage.setItem('todos', JSON.stringify(todosValue))
  );
}

export const animSpeed = writable(400);