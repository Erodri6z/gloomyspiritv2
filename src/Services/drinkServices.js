
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

export { GetDrinks }