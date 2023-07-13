import {NavLink, Link} from 'react-router-dom'
import '../../style/template.scss'
import Logo from "../../image/LogoKasa.svg"
function Header() {

  return (
    <header>
    <nav>
      <Link to="/"><img src={Logo} alt="Notre Logo Kasa" /></Link>
      <ul>

      <NavLink to="/" id="HomeLink" activeclassname="" >Accueil </NavLink>
      <NavLink to="/about" id="AboutLink" activeclassname="" >A Propos</NavLink>
      </ul>
    </nav></header>
  )
}

export default Header