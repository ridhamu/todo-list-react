import { Todo } from "../types/todo";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todos: Todo[];
  onChangeCompleted: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({
  todos,
  onChangeCompleted,
  onDelete,
}: TodoListProps) {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
        {todosSorted.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onChangeCompleted={onChangeCompleted}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-sm font-bold text-gray-400">
          no todos yet. you can start by filling above ⬆️
        </p>
      )}
    </>
  );
}
