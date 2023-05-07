import { atom } from 'jotai';
import create from 'zustand/vanilla';
import { atomWithStore } from 'jotai-zustand';

type Todo = {
	id: number;
	text: string;
	completed: boolean;
};

// const todosAtom = atom<Todo[]>([]);
// const addTodoAtom = atom(null, (get, set, text: string) => {
// 	const todos = get(todosAtom);
// 	const newTodo = {
// 		id: todos.length,
// 		text,
// 		completed: false
// 	};
// 	set(todosAtom, [...todos, newTodo]);
// });
// const toggleTodoAtom = atom(null, (get, set, id: number) => {
// 	const todos = get(todosAtom);
// 	const newTodos = todos.map((todo) => {
// 		todo.id === id && (todo.completed = !todo.completed);
// 		return todo;
// 	});
// 	set(todosAtom, newTodos);
// });

type Store = {
	todos: Todo[];
  // addTodo: (text: string) => void;
  // toggleTodo: (id: number) => void;
};

// create a store with atoms
const useStore = create<Store>((set) => ({
	todos: []
}));

// create atoms with store
const todosAtom = atomWithStore(useStore);
