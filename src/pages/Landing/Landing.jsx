import Whiskey from "./../../assets/bottles/Whiskey.png"
import Vodka from "../../assets/bottles/Vodka.png"
import Rum from "../../assets/bottles/Rum.png"
import Tequila from "../../assets/bottles/Tequila.png"
import Gin from "../../assets/bottles/Gin.png"
import Other from "../../assets/bottles/Other.png"
import "./Landing.css"


const Landing = () => {
  return (
    <>
    <div>
      <h3>Welcome to Gloomy Spirits</h3>
      <div class="bottle-interface">
        <img class="bottle" src={Whiskey} alt="whiskey" />
        <img class="bottle" src={Vodka} alt="whiskey" />
        <img class="bottle" src={Rum} alt="whiskey" />
        <img class="bottle" src={Gin} alt="whiskey" />
        <img class="bottle" src={Tequila} alt="whiskey" />
        <img class="bottle" src={Other} alt="whiskey" />
      </div>
    </div>
    </>
  )
}

export default Landing