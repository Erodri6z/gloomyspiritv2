import Results from "../../components/Results/Results"
import Search from "../../components/Search/Search"



const SearchResults = (props) => {
  // let s = props.spirit
  
  return (
    <>
    <div className="sr-div">
      <Results drinks={props.drinks}/>
    </div>
    </>
  )
}

export default SearchResults