import './nav.css'

function Nav () {
  return (
    <nav>
      <a href="/">
      <h3 className='title'>
        Gloomy Spirits
        </h3>
      </a>
      <ul>
        <li className='nav-item'>
          <a href="/spirit">
            Spirits
          </a>
        </li>
        <li className='nav-item'>Methods</li>
        <li className='nav-item'>
          <a href="/socials">
            Socials
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav