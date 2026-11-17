import { useTodosList } from "./useTodos";
import { TodoCardFunc } from "./TodoCardFunc";
import { useSelectedStore } from "./useSelectedStore";
import { TaskCardFunc } from "./TaskCardFunc";
import './App.css'
function App() {
  const { data, isLoading, isError, error } = useTodosList();
  const { selectedTasks, addTask, removeTask, clearAll } = useSelectedStore();
  if (isLoading) return <h1>Загрузка...</h1>;
  if (isError) return <h1>Error {error.message}</h1>;

  return (
    <main>
      <div className="todos_div">
        {data.map((todo) => (
          <TodoCardFunc key={todo.id} todo={todo} addTask={addTask} selectedTasks={selectedTasks}/>
        ))}
      </div>
      <div className="tasks_div">
          <h1>{selectedTasks.length > 1 ? `Мои заказы-${selectedTasks.length}` : ""}</h1>
        {selectedTasks.map(task => <TaskCardFunc key={task.id} task={task} removeTask={removeTask} />)}
        {selectedTasks.length > 0 ? <button onClick={clearAll}>Очистить всё</button> : <h1>пустой</h1>}
      </div>
    </main>
  );
}

export default App;
