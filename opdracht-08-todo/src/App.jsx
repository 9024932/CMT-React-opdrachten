import '../../opdracht-09-tailwind/src/App.css' 
import { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'

export default function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now() + Math.random(), text }])
  }

  return (
    <main className="min-h-screen flex items-start justify-center bg-gradient-to-r from-blue-500 to-blue-900 py-16 px-4">
      <div className="w-full max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-8">Opdracht 08 — To Do</h1>

        <div className="flex justify-center mb-6">
          <CreateTodo onCreate={createTodo} />
        </div>

        <div className="flex flex-col gap-4 items-center">
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  )
}