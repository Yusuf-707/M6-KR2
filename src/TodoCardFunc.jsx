export const TodoCardFunc = ({todo, addTask, selectedTasks}) => {
  const isSelected = selectedTasks.some(
    (task) => task.id === todo.id
  )
  return(
      <div>
        <h1>{todo.title}</h1>
        <button disabled={isSelected} onClick={() => addTask(todo)}>Взять в работу</button>
        <hr />
      </div>
    )
  }