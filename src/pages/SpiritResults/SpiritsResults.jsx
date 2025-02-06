import Whiskey from "./../../assets/bottles/Whiskey.png"
import Vodka from "../../assets/bottles/Vodka.png"
import Rum from "../../assets/bottles/Rum.png"
import Tequila from "../../assets/bottles/Tequila.png"
import Gin from "../../assets/bottles/Gin.png"
import Other from "../../assets/bottles/Other.png"
import Results from "../../components/Results/Results"


const SpiritsResults = (props) => {
  let s = props.spirit
  
  return (
    <>
    <img src={s} alt="spirit" />
    <div>
      <h4>heres the spirit</h4>
      <Results />
    </div>
    </>
  )
}

export default SpiritsResults