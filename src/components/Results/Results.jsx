import Collins from "./../../assets/defaultcups/Collins Glass.png"
import Coupe from "./../../assets/defaultcups/Coupe Glass.png"
import Marg from "./../../assets/defaultcups/Margarita Glass.png"
import Martini from "./../../assets/defaultcups/Martini Glass.png"
import Rocks from "./../../assets/defaultcups/Rocks Glass.png"
import "./Results.css"
const Results = (props) => {
  // const fakeDrinks = [
  //   {
  //     name: "Martini",
  //     image: Martini,
  //     color: "white"
  //   },{
  //     name: "Luxardo Old Fashioned",
  //     image: Rocks,
  //     color: "brown"
  //   },{
  //     name: "Margarita",
  //     image: Marg,
  //     color: "yellow"
  //   },{
  //     name: "Daquiri",
  //     image: Coupe,
  //     color: "white"
  //   }
  // ]

  // console.log(fakeDrinks[1].color.replaceAll('"', ''))

  return (
    <>
    <div className="results-div">
      {props.drinks.map(d => 
        <div key={d.name} className="drink-card" >
          <img src={d.image? d.image: ""} alt="drink" style={{ backgroundColor : d.color }} className="thumbnail"/>
          <h3 className="drink-name">{d.name}</h3>
        </div>
      )}
    </div>
    </>
  )
}

export default Results