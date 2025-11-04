import { Trash } from "iconsax-reactjs";
import type { Todo as TodoType } from "./Todos.types";

type todoProps = {
  todo: TodoType;
  removeTodo: (id: string) => void;
  completedTodo: (id: string) => void;
};

function Todo({ todo, removeTodo, completedTodo }: todoProps) {
  return (
    <div className="Todo">
      <p
        className={`${todo.completed ? "completed" : ""}`} // or completed className
      >
        {todo.title}
      </p>
      <div>
        <Trash size="32" color="#fff" />
      </div>
    </div>
  );
}

export default Todo;
