import "./DrinkPolar.css"
import Collins from "./../../assets/defaultcups/Collins Glass.png"
import Coupe from "./../../assets/defaultcups/Coupe Glass.png"
import Marg from "./../../assets/defaultcups/Margarita Glass.png"
import Martini from "./../../assets/defaultcups/Martini Glass.png"
import Rocks from "./../../assets/defaultcups/Rocks Glass.png"

const DrinkPolar = (props) => {
  let d = props.drink

  const getImage = (rgArr) => {
    switch (rgArr[0].toLowerCase()) {
      case "collins glass":
        return Collins
      case "rocks glass":
        return Rocks
      case "margarita glass":
        return Marg
      case "coupe glass":
        return Coupe
      case "martini glass":
        return Martini
    }
  }

  return (
    <>
      <div key={d.id} className="drink-card">
        <img src={d.image? d.image: getImage(d.recommendedGlasses)} alt="drink" style={{ backgroundColor : d.color }} className="thumbnail"/>
        <h3 className="drink-name">{d.name}</h3>
      </div>
    </>
  )
}

export default DrinkPolar