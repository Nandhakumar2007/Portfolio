import { useState } from "react";
import "./App.css";

function App() {

  // Form
  const [form, setForm] = useState({
    task: ""
  });

  // Tasks
  const [tasks, setTasks] = useState([]);

  // Theme
  const [dark, setDark] = useState(false);

  // Accordion
  const [show, setShow] = useState(false);

  // Modal
  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Add Task
  const addTask = (e) => {
    e.preventDefault();

    if (form.task === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        task: form.task,
        completed: false
      }
    ]);

    setForm({ task: "" });
  };

  // Complete / Pending
  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // Delete
  const deleteTask = () => {
    setTasks(tasks.filter((item) => item.id !== deleteId));
    setModal(false);
  };

  return (
    <div className={dark ? "app dark" : "app"}>

      <h1>Task Manager</h1>

      {/* Form */}
      <form onSubmit={addTask}>
        <input
          value={form.task}
          onChange={(e) =>
            setForm({ ...form, task: e.target.value })
          }
          placeholder="Enter task"
        />

        <button>Add Task</button>
      </form>

      {/* Counter */}
      <h3>Total Tasks: {tasks.length}</h3>

      {/* Theme */}
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light" : "Dark"}
      </button>

      {/* Tasks */}
      {tasks.map((item) => (
        <div className="task" key={item.id}>

          <span>{item.task}</span>

          <button onClick={() => toggleTask(item.id)}>
            {item.completed ? "Completed" : "Pending"}
          </button>

          <button
            onClick={() => {
              setDeleteId(item.id);
              setModal(true);
            }}
          >
            Delete
          </button>

        </div>
      ))}

      {/* Completed Tasks */}
      <h3>Completed Tasks</h3>

      {tasks
        .filter((item) => item.completed)
        .map((item) => (
          <p key={item.id}>{item.task}</p>
        ))}

      {/* Accordion */}
      <button onClick={() => setShow(!show)}>
        How to use
      </button>

      {show && (
        <p>
          Enter task → Add Task → Click Pending to complete.
        </p>
      )}

      {/* Modal */}
      {modal && (
        <div className="modal">
          <h3>Are you sure?</h3>

          <button onClick={deleteTask}>
            Yes
          </button>

          <button onClick={() => setModal(false)}>
            No
          </button>
        </div>
      )}

    </div>
  );
}

export default App;