import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoListItemProps {
  todo: Todo;
  onChangeCompleted: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoListItem({
  todo,
  onChangeCompleted,
  onDelete
}: TodoListItemProps) {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onChangeCompleted(todo.id, e.target.checked)}
          className="scale-125"
        />
        <span className={todo.completed ? "text-gray-400 line-through" : ""}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)} className="p-2">
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
}
