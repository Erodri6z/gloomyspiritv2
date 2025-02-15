import Whiskey from "./../../assets/bottles/Whiskey.png"
import Vodka from "../../assets/bottles/Vodka.png"
import Rum from "../../assets/bottles/Rum.png"
import Tequila from "../../assets/bottles/Tequila.png"
import Gin from "../../assets/bottles/Gin.png"
import Other from "../../assets/bottles/Other.png"

const Spirits = () => {

  const bottles = [{
    name: "Vodka",
    image: Vodka,
    desc: "Vodka is one of the most versatile spirits. Traditionally distilled from potatoes, but now a days distilled from grains. Vodka originates from eastern Europe, particularly from Russia and Poland, and it has had a rich cultural history and is often enjoyed neat in some of those regions.",
    uses: "Vodka is neutrual in taste, (Or at least it should be) so commonly used in cocktails to take on the flavor of the other ingredients in the drink."
  },{
    name: "Whiskey",
    image: Whiskey,
    desc: "Whiskey is usually distilled from fermented grain mash and aged in wooden barrels. Known for its deep, complex flavors an drich history. Whiskey is produced in many styles and variations, from Bourbons with a 50 percent corn mash bill to Scotch distilled in Scotland from malted barley and grains, and everything in between.",
    uses: "Whiskey has a vast and wide range of flavors, depending on the kind of whiskey. Flavors like caramel, apple, cherry, vanilla, dark chocolate, and so many more. So Whiskey works in spirit forward cocktails, highballs, and sours best."
  },{
    name: "Rum",
    image: Rum,
    desc: "Rum is a versatile, sugarcane-based spirit that comes in a variety of styles, ranging from light and crisp to dark and complex. Well known for its associations with pirates, sailors, and rebelion, Rum originates from the Caribbean, where most of rum is distilled.",
    uses: "Rum comes in many forms, from White Rum that is more clear and smooth to Dark Rums that are often drank neat, much like Tequilas and Whiskeys. But one fact reigns true, Rum Plays really well in sweeter, more tropical and fruit forward cocktails, such as Daquiris, Mojitos and, of course, the entire genre of Tiki Drinks"
  },{
    name: "Gin",
    image: Gin,
    desc: "Gin at it's core, is a flavored Vodka, Usually infused with botanicals, herbs, and juniper berries. Originating from the Neatherlands and popularised in England. Gin has evolved from a medical tonic to a spirit associated with sophistication and class. Gin comes in some variations but the most common is London Dry Gin, which is juniper forwards and dry.",
    uses: "Gin can best be described flavor wise as bright, citrusy, and floral, so best to use in cocktails that are spirit forward such as a Martini or a Negroni but also works exceptionally well in cocktails with similar or complimentary flavor profiles."
  },{
    name: "Tequila",
    image: Tequila,
    desc: "Tequila is a vibrant, agave-based spiritwith deep roots in Mexican culture and traditions. So much so that it cannot be classified as tequila if it does not get distilled in Mexico. Distilled from the blue Weber agave plant, tequila is often known for being the go-to spirit for shots, party drinks, and even status symbols in some areas.",
    uses: "Tequila usually has an agave forward, bright, and rich taste. So when it comes to cocktails its often paired with cirtus, and usually used for party drinks that are easier to drink such as Margaritas, Palomas, Ranch Waters and Batangas."
  },{
    name: "Liqueur's and Others",
    image: Other,
    desc: "Liqueurs are flavored spirits, usually under 40 abv that can be flavored with just about anything, from citrus to coffe, almonds to tropical fruits. If there's a flavor in your mind, someone probably made a liqueur of it.",
    uses: "Expiramenting with taste is half the fun in mixology, so why would I tell you what to do? "
  }]

  return (
    <>
    <div>
      <h1>Spirits</h1>
      {bottles.map(b => 
        <div key={b.name}>
          <div>
          <h4>{b.name}</h4>
          <img src={b.image} alt="image" />
          </div>
          <div>
            <p>{b.desc}</p>
            <p>{b.uses}</p>
          </div>
        </div>
      )}
    </div>
    </>
  )
}


export default Spirits