import { Trash } from "iconsax-reactjs";
import type { Todo as TodoType } from "./Todos.types";

type todoProps = {
  todo: TodoType;
  removeTodo: (id: string) => boolean;
  toggleComplete: (id: string) => boolean;
};

function Todo({ todo, removeTodo, toggleComplete }: todoProps) {
  return (
    <div className="Todo">
      <p
      onClick={() => toggleComplete(todo.id)}
        className={`${todo.completed ? "completed" : ""}`} // or completed className
      >
        {todo.title}
      </p>
      <div>
        <Trash size="32" color="#fff" onClick={() => removeTodo(todo.id)} />
      </div>
    </div>
  );
}

export default Todo;
