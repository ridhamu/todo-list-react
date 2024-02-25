import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./types/hooks/useTodos";

function App() {
  const {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodo,
  } = useTodos();
  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-center text-3xl">Your Todos: </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onChangeCompleted={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodo} />
    </main>
  );
}

export default App;
