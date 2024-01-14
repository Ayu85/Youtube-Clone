import { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App
