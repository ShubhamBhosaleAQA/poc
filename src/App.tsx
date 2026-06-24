import { useState } from 'react'
import './App.css'
import { Button } from './components/Button/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button variant="primary" size="md" onClick={() => setCount(count + 1)} fullWidth>
      Count is {count}
    </Button>
    <Button variant="secondary" size="md" onClick={() => setCount(count - 1)}>
      Count is {count}
    </Button>
    <Button variant="primary" size="sm" onClick={() => setCount(count + 1)}>
      Count is {count}
    </Button>
    <Button variant="secondary" size="sm" onClick={() => setCount(count - 1)} fullWidth>
      Count is {count}
    </Button>
    </>
    
  )
}

export default App
