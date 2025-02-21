import './DrinkShow.css'

const DrinkShow = (props) => {

  let drink = props.drink
  return (
    <>
    <div>
      <h3>{drink.name}</h3>
      <h4>{drink.mainSpirit}</h4>
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
      <div className="methods">
        <p>Methods:</p>
        {drink.method.map((m) => 
          <li key={m}>{m}</li>
        )}
      </div>
      <div className="garnish">
        {drink.garnish.map((g) => 
          <li key={g}>{g}</li>
        )}
      </div>
      <div className="recommendedGlass">
        {drink.recommendedGlasses.map((r) => 
          <li key={r}>{r}</li>
        )}
      </div>
      <div className="notes">
        {drink.notes.map((n) => 
          <li key={n}>{n}</li>
        )}
      </div>
      <div className="vibe-credit">
        <div>
          <p>Vibe:  {drink.vibe}</p>
          <p>Credit: {drink.credit}</p>
        </div>
        <div></div>
      </div>

    </div>
    </>
  )
}


export default DrinkShow