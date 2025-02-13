// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'\
import { Route, Routes} from 'react-router'
import Nav from './components/Nav/nav'
import Landing from './pages/Landing/Landing'
import SpiritsResults from './pages/SpiritResults/SpiritsResults'
import './App.css'
import { useState } from 'react'

function App() {
  const [spirit, setSpirit] = useState({})

  const chooseSpirit = (s) => {
    setSpirit(s)
  }

  return (
    <>
    <div className='main'>

    <Nav />
    <Routes>
      <Route 
      path="/"
      element={
        <Landing chooseSpirit={chooseSpirit}/>
      }
      />
      <Route
      path='/SpiritSearch'
      element={
        <SpiritsResults spirit={spirit} />
      }
      />
    </Routes>
    </div>
    </>
  )
}

export default App
