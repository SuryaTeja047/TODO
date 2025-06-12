import { useState } from "react";

// The TODO componet in which we can create tasks delete thema and mark them as complete and important
const TODO = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Updates input value for the new task
  const handleTask = (e) => {
    setTask(e.target.value);
  };

  //Adds new task to the list if the task is not empty
  const addTasks = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
      important: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
    console.log(tasks);
  };

  // Removes a task by ID
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggles a task's completed status
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Toggles a task's important status
  const toggleImportant = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === id ? { ...t, important: !t.important } : t
      )
    );
  };
  return (
    <>
      <div className="container mt-4 bg-light p-3">
        <h1>ToDo List</h1>
        <form>
          <div className="d-flex justify-content-between">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={task}
                onChange={handleTask}
              />
              <button className="btn btn-primary" onClick={addTasks}>
                Add Notes
              </button>
            </div>
          </div>
        </form>
        <div className="mt-4">
          {tasks.map((task) => (
            <div className="d-flex justify-content-between m-2" key={task.id}>
              <p
                className={`${
                  task.completed
                    ? "text-decoration-line-through text-muted"
                    : ""
                } ${task.important ? "bg-warning" : ""}`}
              >
                {task.text}
              </p>
              <div className="btn-group ms-auto">
                <button
                  className={`btn btn-sm ${
                    task.important ? "btn-warning" : "btn-outline-warning"
                  }`}
                  onClick={() => toggleImportant(task.id)}
                >
                  <i className="bi bi-exclamation-lg"></i>
                </button>
                <button
                  className={`btn btn-sm ${
                    task.completed ? "btn-secondary" : "btn-success"
                  }`}
                  onClick={() => toggleComplete(task.id)}
                >
                  <i className="bi bi-check"></i>
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTask(task.id)}
                >
                  <i className="bi bi-x"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TODO;
