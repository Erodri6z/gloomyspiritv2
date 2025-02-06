// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'\
import { Route, Routes} from 'react-router';
import Nav from './components/Nav/nav'
import Landing from './pages/Landing/Landing'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Routes>
      <Route 
      path="/"
      element={
        <Landing />
      }
      />
    </Routes>
    </>
  )
}

export default App
