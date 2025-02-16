import { useState } from "react"

const Search = () => {
  const [search, setSearch] = useState({
    search: ""
  })

  const handleChange = (e) => {
    setSearch({ ...search,
      [e.target.name] : e.target.value
    })
  }


  const handleSearch = (e) => {
    e.preventDefault()
    try{
      console.log("looking for this:", search)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" onChange={handleChange} />
        <button>Search</button>
      </ form>
    </div>
  )
}

export default Search