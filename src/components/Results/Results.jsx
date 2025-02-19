import { useState } from "react"
import Popup from "reactjs-popup"
// import 'reactjs-popup/dist/index.css'
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
        margin="auto"
        contentStyle={{
        position: "",
        margin: "auto",
        width: '300px',
        padding: '20px',
        backgroundColor: 'black',
        textAlign: 'center',
        arrowStyle: "none"
        }}>
        <DrinkShow />
        </Popup>
      )}
    </div>
    </>
  )
}

export default Results