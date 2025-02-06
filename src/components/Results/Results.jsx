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
      color: "off-white"
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

  // console.log(fakeDrinks[1].color.replaceAll('"', ''))

  return (
    <>
    <div>
      {fakeDrinks.map(d => 
        <div key={d.name} style={{ backgroundColor : d.color }}>
          <img src={d.image} alt="drink" />
          <h3>{d.name}</h3>
        </div>
      )}
    </div>
    </>
  )
}

export default Results