import Whiskey from "./../../assets/bottles/Whiskey.png"
import Vodka from "../../assets/bottles/Vodka.png"
import Rum from "../../assets/bottles/Rum.png"
import Tequila from "../../assets/bottles/Tequila.png"
import Gin from "../../assets/bottles/Gin.png"
import Other from "../../assets/bottles/Other.png"
import Results from "../../components/Results/Results"

import './SpiritResults.css'


const SpiritsResults = (props) => {
  let s = props.spirit
  
  return (
    <>
    <div className="sr-div">
    <img src={s} alt="spirit" />
    <div>
      <Results />
    </div>
    </div>
    </>
  )
}

export default SpiritsResults