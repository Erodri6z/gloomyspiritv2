
const BASE_URL = import.meta.env.VITE_BASE_URL

console.log(BASE_URL)


async function GetDrinks()  {
  try {
    const res = await fetch(`${BASE_URL}/drinks`)
    return await res.json()
  } catch (err) {
    throw err  
  }
}


async function GetByAlc(alc) {
  try {
    const res = await fetch(`${BASE_URL}/drinks/byAlcohol/${alc}`)
    res.json()
  } catch (err) {
    throw err
  }
}


async function SearchDrink(n) {
  try {
    const res = await fetch(`${BASE_URL}/drinks/byName/${n}`)
    return await res.json()
  } catch (err) {
    throw err
  }
}

export { GetDrinks, GetByAlc, SearchDrink }