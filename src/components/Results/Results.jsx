import Collins from "./../../assets/defaultcups/Collins Glass.png"
import Coupe from "./../../assets/defaultcups/Coupe Glass.png"
import Marg from "./../../assets/defaultcups/Margarita Glass.png"
import Martini from "./../../assets/defaultcups/Martini Glass.png"
import Rocks from "./../../assets/defaultcups/Rocks Glass.png"

const Results = () => {
  const fakeDrinks = [
    {
      name: "Martini",
      image: Martini,
      color: "clear"
    },{
      name: "Old Fasioned",
      image: Rocks,
      color: "brown"
    },{
      name: "Margarita",
      image: Marg,
      color: "green"
    },{
      name: "Daquiri",
      image: Coupe,
      color: "white"
    }
  ]

  return (
    <>
    <div>
      {fakeDrinks.map(d => {
        <div>
          <img src={d.image} alt="drink" background-color={d.color} />
          <h3>d.name</h3>
        </div>
      })}

    </div>
    </>
  )
}

