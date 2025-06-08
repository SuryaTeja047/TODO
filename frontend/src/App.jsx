import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const handleTask = (e) => {
    setTask(e.target.value);
  };
  const addTasks = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: task.trim(),
    };

    setTasks([...tasks, newTask]);
    setTask("");
    console.log(tasks);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <>
      <div className="container mt-4">
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
              <p>{task.text}</p>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTask(task.id)}
              >
                <i className="bi bi-x"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
