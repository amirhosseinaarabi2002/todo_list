import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import type { Todo as TodoType } from "./Todos.types";

function TodosWrapper() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      },
    ]);

    return true;
  };

  const removeTodo = (id: string) => {};

  const toggleComplete = (id: string) => {};
  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>
      {/* Add New Todo Form */}
      <TodoForm addTodo={addTodo} />
      {/* display todos */}

      {todos.map((todo) => (
        <Todo todo={todo} removeTodo={removeTodo} completedTodo={toggleComplete} />
      ))}
    </div>
  );
}

export default TodosWrapper;
