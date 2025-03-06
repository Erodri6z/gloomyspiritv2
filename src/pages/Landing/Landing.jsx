import Whiskey from "./../../assets/bottles/Whiskey.png"
import Vodka from "../../assets/bottles/Vodka.png"
import Rum from "../../assets/bottles/Rum.png"
import Tequila from "../../assets/bottles/Tequila.png"
import Gin from "../../assets/bottles/Gin.png"
import Other from "../../assets/bottles/Other.png"
import { Link } from "react-router-dom"
import "./Landing.css"


const Landing = (props) => {

  const selectAlc = (img, spirit) => {
    props.chooseSpirit(img)
    props.handleSpiritSearch(spirit)
  }
  return (
    <>
    <div className="homepage">
      <h3>Pick Your Poison</h3>
      <div class="bottle-interface">
        <Link to={"/SpiritSearch"} onClick={() => selectAlc(Whiskey, "Whiskey")}>
          <img max-width="250" max-height="500" class="bottle" src={Whiskey} alt="whiskey" />
        </Link>
        <Link to={"/SpiritSearch"} onClick={() => selectAlc(Vodka, "Vodka")}>
          <img max-width="180" max-height="500" class="bottle" src={Vodka} alt="whiskey" />
        </Link>
        <Link to={"/SpiritSearch"} onClick={() => selectAlc(Rum, "Rum")}>
          <img max-width="200" max-height="300" class="bottle" src={Rum} alt="whiskey" />
        </Link>
        <Link to={"/SpiritSearch"} onClick={() => selectAlc(Gin, "Gin")}>
          <img max-width="200" max-height="500" class="bottle" src={Gin} alt="whiskey" />
        </Link>
        <Link to={"/SpiritSearch"} onClick={() => selectAlc(Tequila, "Tequila")}>
          <img max-width="250" max-height="500" class="bottle" src={Tequila} alt="whiskey" />
        </Link>
        <Link to={"/SpiritSearch"} onClick={() => selectAlc(Other, "Other")}>
          <img max-width="350" max-height="500" class="bottle" src={Other} alt="whiskey" />
        </Link>
      </div>
    </div>
    </>
  )
}

export default Landing 