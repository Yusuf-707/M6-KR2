export const TaskCardFunc = ({task, removeTask, clearAll}) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <button onClick={() => removeTask(task.id)}>Отказаться</button>
      <hr />
    </div>
  );
};
