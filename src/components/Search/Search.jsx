import { useState } from "react"

const Search = (props) => {
  const [searchData, setSearchData] = useState({
    search: ""
  })

  const handleChange = (e) => {
    setSearchData({ ...searchData,
      [e.target.name] : e.target.value
    })
  }


  const handleSearch = (e) => {
    e.preventDefault()
    try{
      props.handleSearch(searchData.search)
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