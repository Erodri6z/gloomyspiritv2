// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'\
import { Navigate, Route, Routes, useNavigate} from 'react-router'
import Nav from './components/Nav/nav'
import Landing from './pages/Landing/Landing'
import SpiritsResults from './pages/SpiritResults/SpiritsResults'
import SearchResults from './pages/SearchResults/SearchResults'
import SocialsPage from './pages/Socials/SocialsPage'
import Spirits from './pages/Spirits/Spirits'
import * as drinkservice from './Services/drinkServices'
import './App.css'
import { useState } from 'react'

function App() {
  const [spirit, setSpirit] = useState({})
  const [drinks, setDrinks] = useState([])
  const navigate = useNavigate()

  const chooseSpirit = (s) => {
    setSpirit(s)
  }

  const handleSpiritSearch = async (s) => {
    const d = await drinkservice.GetByAlc(s)
    setDrinks(d)
    // navigate("/Search")
  }

  const handleSearch = async (s) => {
    console.log(s)
    const d = await drinkservice.SearchDrink(s)
    console.log(d)
    setDrinks(d)
    navigate("/Search")
  }

  return (
    <>
    <div className='main'>

    <Nav />
    <Routes>
      <Route 
      path="/"
      element={
        <Landing chooseSpirit={chooseSpirit} handleSearch={handleSearch} handleSpiritSearch={handleSpiritSearch}/>
      }
      />
      <Route
      path='/SpiritSearch'
      element={
        <SpiritsResults spirit={spirit} drinks={drinks}/>
      }
      />
      <Route
      path='/Search'
      element={
        <SearchResults drinks={drinks} handleSearch={handleSearch}/>
      }
      />
      <Route 
      path="/socials"
      element={
        <SocialsPage /> 
      }
      />
      <Route 
      path="/spirit"
      element={
        <Spirits />
      }
      />
    </Routes>
    </div>
    </>
  )
}

export default App
