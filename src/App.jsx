 import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestForm from './components/TestForm'
import Form from './components/FormCont'
import FormCont from './components/FormCont'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormCont />
    </>
  )
}

export default App
