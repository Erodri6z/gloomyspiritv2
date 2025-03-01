import { useState } from "react"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css'
import DrinkShow from "../DrinkShow/DrinkShow"
import Collins from "./../../assets/defaultcups/Collins Glass.png"
import Coupe from "./../../assets/defaultcups/Coupe Glass.png"
import Marg from "./../../assets/defaultcups/Margarita Glass.png"
import Martini from "./../../assets/defaultcups/Martini Glass.png"
import Rocks from "./../../assets/defaultcups/Rocks Glass.png"
import "./Results.css"
import DrinkPolar from "../DrinkPolar/DrinkPolar"
const Results = (props) => {


  return (
    <>
    <div className="results-div">
      {props.drinks.map(d => 
      <Popup trigger={
        <div>
          <DrinkPolar key={d.id} drink={d}/>
        </div>
        }
        modal
        closeOnDocumentClick
        contentStyle={{
          background: "black",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          maxWidth: "800px",
          width: "90%", 
          position: "fixed", 
          top: "50%", 
          left: "50%",         
          transform: "translate(-50%, -50%)", 
          zIndex: "9999", 
        }}>
          <div className="drink-show">
            <DrinkShow drink={d}/>
          </div>
        </Popup>
      )}
    </div>
    </>
  )
}

export default Results