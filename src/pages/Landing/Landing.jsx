import Whiskey from "./../../assets/bottles/Whiskey.png"
import Vodka from "../../assets/bottles/Vodka.png"
import Rum from "../../assets/bottles/Rum.png"
import Tequila from "../../assets/bottles/Tequila.png"
import Gin from "../../assets/bottles/Gin.png"
import Other from "../../assets/bottles/Other.png"


const Landing = () => {
  return (
    <>
    <div>
      <h3>Welcome to Gloomy Spirits</h3>
      <div class="bottle-interface">
        <img src={Whiskey} alt="whiskey" />
        <img src={Vodka} alt="whiskey" />
        <img src={Rum} alt="whiskey" />
        <img src={Gin} alt="whiskey" />
        <img src={Tequila} alt="whiskey" />
        <img src={Other} alt="whiskey" />
      </div>
    </div>
    </>
  )
}

export default Landing