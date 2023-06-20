import { Link } from 'react-router-dom'
import '../../style/template.scss'
import Logo from "../../image/LogoKasa.svg"
function Header({id}) {
console.log(id + " id");
  return (
    <nav>
      <Link to="/"><img src={Logo} alt="Notre Logo Kasa" /></Link>
      <ul>

      <Link to="/" id={id} >Accueil </Link>
      <Link to="/about" id="AboutLink" >A Propos</Link>
      </ul>
    </nav>
  )
}

export default Header