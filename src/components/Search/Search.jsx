import { useState } from "react"

const Search = () => {
  const [search, setSearch] = useState({
    search: ""
  })
  return (
    <div>
      <form>
        <input type="search" name="" id="" />
        <button>Search</button>
      </ form>
    </div>
  )
}

export default Search