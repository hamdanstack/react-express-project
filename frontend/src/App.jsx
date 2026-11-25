
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/api/message')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch message')
        }
        return response.json()
      })
      .then((data) => {
        setMessage(data.message)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>My React + Express Project</h1>
      <h2>Backend Response:</h2>

      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  )
}

export default App
