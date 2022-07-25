import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TodoState, ITodo, SortOptionsEnum } from "./types";

const initialState: TodoState = {
  searchQuery: "",
  todos: [
    {
      createdAt: "7/21/2022, 8:16:32 AM",
      text: "Text text",
      title: "Learn JS",
      isCompleted: true,
    },
    {
      createdAt: "7/22/2022, 8:16:32 AM",
      text: "Text text",
      title: "Learn React",
      isCompleted: false,
    },
    {
      createdAt: "7/23/2022, 8:16:32 AM",
      text: "Hello",
      title: "Get a Job",
      isCompleted: true,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setSearchQuery: (state, { payload }: PayloadAction<string>) => {
      state.searchQuery = payload;
    },
    addTodo: (state, { payload }: PayloadAction<ITodo>) => {
      state.todos.push(payload);
    },
    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter(
        ({ createdAt }) => createdAt !== payload
      );
    },
    toggleTodoComplete: (state, { payload }: PayloadAction<string>) => {
      const todo = state.todos.find(({ createdAt }) => createdAt === payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    setSortTodos: (state, { payload: sortBy }: PayloadAction<string>) => {
      state.todos = state.todos.sort((a, b) => {
        switch (sortBy) {
          case SortOptionsEnum.AZ:
            return a.title.localeCompare(b.title);
          case SortOptionsEnum.ZA:
            return b.title.localeCompare(a.title);
          case SortOptionsEnum.Newest:
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          case SortOptionsEnum.Oldest:
          default:
            return (
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
        }
      });
    },
  },
});

export const {
  setSearchQuery,
  setSortTodos,
  addTodo,
  deleteTodo,
  toggleTodoComplete,
} = todosSlice.actions;

export const selectTodos = (state: RootState): ITodo[] => state.todos.todos;
export const selectSearchQuery = (state: RootState): string =>
  state.todos.searchQuery;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectSearchQuery],
  (todos, searchQuery) =>
    todos.filter((todo) => todo.title.toLowerCase().includes(searchQuery))
);

export default todosSlice.reducer;
