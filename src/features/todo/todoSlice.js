import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      // Find the todo item with the specified id
      const todoToUpdate = state.todos.find((todo) => todo.id === id);

      // Check if todoToUpdate is truthy (todo item found)
      if (todoToUpdate) {
        // Update the text of the todo item
        todoToUpdate.text = text;
      }
      // If todoToUpdate is falsy, no update is performed
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
