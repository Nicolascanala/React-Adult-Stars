import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Wake up before 9am',
        day: 'Every. single. day.',
        reminder: true,
    },
    {
        id: 2,
        text: 'Brush your teeth twice a day',
        day: "There's no escaping it.",
        reminder: true,
    },
    {
        id: 3,
        text: '30 minute workout',
        day: 'Gotta stay in shape...',
        reminder: true,
    },
    {
        id: 4,
        text: '4 hours of productivity',
        day: 'Working hard or hardly working?',
        reminder: true,
    },
    {
        id: 5,
        text: 'Groceries and cooking',
        day: 'Today at 19:00PM',
        reminder: true,
    },
])

const LOCAL_STORAGE_KEY = 'todosApp.todos'

useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTasks) setTasks(storedTasks)
}, [])

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
}, [tasks])

// Add Adult Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete Adult task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
  alert('Well look at you! Nice job!!')
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? { ...task, reminder:
      !task.reminder } : task
    )
  )
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      <h4>Make sure you get as many adult stars as possible today! You will thank yourself :)</h4>
      <br />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder} />) : ('You have successfully earned all your adult stars!')}
      <br />
      <Footer />
    </div>
  );
}

export default App;
