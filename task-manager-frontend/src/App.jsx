import { use, useEffect, useState } from 'react';
import axios from "axios";

function App() {

  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")

  const [editingId, setEditingId] = useState(null)
  const [editingTitle, setEditingTitle] = useState("")


  // FETCH TASK 
  const FetchTasks = async () => {
    const Result = await axios.get("http://localhost:5000/tasks")
    setTasks(Result.data)
  }
  useEffect(() => {
    FetchTasks()
  }, [])

  // ADD TASK 
  const AddTask = () => {
    axios.post("http://localhost:5000/tasks", { title })
      .then(() => {
        setTitle("")
        FetchTasks()
      })
  }


  // CHECK BOX - CLICK COMPLETED TRUE ELSE FALSE 
  const ToggleCompleted = async (task) => {
    await axios.put(`http://localhost:5000/tasks/${task.id}`, {
      title: task.title,
      completed: !task.completed
    })
    FetchTasks()
  }

  // DELETE TASK
  const DeleteTask = async (task) => {
    await axios.delete(`http://localhost:5000/tasks/${task.id}`)
    FetchTasks()
  }

  // UPDATE TASK






  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8">

        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-black">
          Task Manager
        </h1>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            placeholder="Enter Task"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          <button
            onClick={AddTask}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            Add
          </button>
        </div>

        <ul className="mt-6 space-y-3">
          {tasks.map(task => (
            <li
              key={task.id}
              className="flex flex-col cursor-pointer sm:flex-row  sm:items-center sm:justify-between gap-3 bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              {
                task.completed ? <span className="text-black line-through">{task.title}</span> : <span className="text-black">{task.title}</span>
              }
              <div className='flex items-center gap-2'>
                <input type="checkbox"
                  checked={task.completed}
                  onChange={() => ToggleCompleted(task)}
                />
              </div>

              <div className="flex gap-2">
                <button className="px-3 cursor-pointer py-1 border border-gray-400 rounded-md text-sm hover:bg-gray-300 transition"
                  onClick={() => DeleteTask(task)}>
                  Delete
                </button>

                <button className="px-3 cursor-pointer py-1 border border-gray-400 rounded-md text-sm hover:bg-gray-300 transition">
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default App;