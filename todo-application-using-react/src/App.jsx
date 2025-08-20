import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState([])

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (title.trim() && description.trim()) {
      setTodos([...todos, { title, description, done: false }])
      setTitle('')
      setDescription('')
    }
  }

  const handleMarkDone = (idx) => {
    setTodos(todos.map((todo, i) =>
      i === idx ? { ...todo, done: !todo.done } : todo
    ))
  }

  const handleDelete = (idx) => {
    setTodos(todos.filter((_, i) => i !== idx))
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, background: '#f9f9f9', borderRadius: 8, boxShadow: '0 2px 8px #eee' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>To-Do Application Using React</h2>
      <form onSubmit={handleAddTodo} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ padding: 10, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{ padding: 10, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: 10, fontSize: 16, borderRadius: 4, background: '#1976d2', color: '#fff', border: 'none' }}>
          Add To-Do
        </button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 32 }}>
        {todos.map((todo, idx) => (
          <li key={idx} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            background: '#fff',
            borderRadius: 6,
            boxShadow: '0 1px 4px #eee',
            padding: 16,
            marginBottom: 16,
            textDecoration: todo.done ? 'line-through' : 'none'
          }}>
            <div><strong>{todo.title}</strong></div>
            <div>{todo.description}</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => handleMarkDone(idx)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 4,
                  border: 'none',
                  background: todo.done ? '#ffa726' : '#43a047',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                {todo.done ? 'Undo' : 'Mark as Done'}
              </button>
              <button
                onClick={() => handleDelete(idx)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 4,
                  border: 'none',
                  background: '#e53935',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
