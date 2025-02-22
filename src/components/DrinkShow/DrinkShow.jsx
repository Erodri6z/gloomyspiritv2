import './DrinkShow.css'

const DrinkShow = (props) => {

  let drink = props.drink

  const arrList = (arr) => {
    let len = arr.length
    switch (len) {
      case 1:
        return `${arr[0]}`
      case 2:
        return `${arr[0]} or ${arr[1]}`
      case 3:
        return `${arr[0]}, ${arr[1]} or ${arr[2]}`
      case 4:
        return `${arr[0]}, ${arr[1]}, ${arr[2]}, or ${arr[3]}`
    }
  }

  const methodList = (arr) => {
    let len = arr.length
    switch (len) {
      case 1:
        return `${arr[0]}`
      case 2:
        return `${arr[0]} and ${arr[1]}`
      case 3:
        return `${arr[0]}, ${arr[1]} and ${arr[2]}`
      case 4:
        return `${arr[0]}, ${arr[1]}, ${arr[2]}, and ${arr[3]}`
    }
  }
  return (
    <>
    <div className='cocktail-card'>
      {/* <h3>{drink.name}</h3> */}
      <h4>{drink.mainSpirit}</h4>
      <div className='top'>
          <div className="methods">
            <p>Methods:{methodList(drink.method)}</p>
            <p>Garnish With:{arrList(drink.garnish)}</p>
            <p>Serve in:{arrList(drink.recommendedGlasses)}</p>
          </div>
        <div className="recipe">
          <div className="i-m">
            <div className="mesurements">
              {drink.measurementsOz.map((m) => 
                <li key={m}>{m} oz</li>
              )}
            </div>
            <div className="ingrients">
              {drink.ingredients.map((i) => 
                <li key={i}>{i}</li>
              )}
            </div>
          </div>
          <div className='bitters'>
            {drink.bitters.map((b) => 
              <li key={b}>{b}</li>
            )}
          </div>
        </div>
      </div>
      <div className="notes">
        {drink.notes.map((n) => 
          <li key={n}>{n}</li>
        )}
      </div>
      <div className="vibe-credit">
        <div>
          <p>Credit: {drink.credit}</p>
        </div>
        <div></div>
      </div>

    </div>
    </>
  )
}


export default DrinkShow