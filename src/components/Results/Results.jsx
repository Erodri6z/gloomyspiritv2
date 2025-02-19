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
const Results = (props) => {
  // console.log(selectedDrink)

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
    <div className="results-div">
      {props.drinks.map(d => 
      <Popup trigger={

        <div key={d.id} className="drink-card">
          <img src={d.image? d.image: getImage(d.recommendedGlasses)} alt="drink" style={{ backgroundColor : d.color }} className="thumbnail"/>
          <h3 className="drink-name">{d.name}</h3>
        </div>
        
        }
        // margin="auto"
        modal
        closeOnDocumentClick
        contentStyle={{
          background: "black",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          maxWidth: "400px",
          width: "90%", 
          position: "fixed", 
          top: "50%", 
          left: "50%",         
          transform: "translate(-50%, -50%)", 
          zIndex: "9999", 
        }}>
        <DrinkShow />
        </Popup>
      )}
    </div>
    </>
  )
}

export default Results