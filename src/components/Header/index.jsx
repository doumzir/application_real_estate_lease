import { Link } from 'react-router-dom'
import '../../style/template.scss'
import Logo from "../../image/LogoKasa.svg"
function Header() {

  return (
    <header>
    <nav>
      <Link to="/"><img src={Logo} alt="Notre Logo Kasa" /></Link>
      <ul>

      <Link to="/" id="HomeLink" >Accueil </Link>
      <Link to="/about" id="AboutLink" >A Propos</Link>
      </ul>
    </nav></header>
  )
}

export default Header