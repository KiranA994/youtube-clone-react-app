import Header from './components/Header'
import './App.css'
import Videocard from './components/Videocard'
import { useState } from 'react'

function App() {
  const [cssStyle, setcssStyle] = useState('')

  return (
    <>
      <Header setcssStyle={setcssStyle}/>
      <Videocard cssStyle={cssStyle} />
    </>
  )
}

export default App
