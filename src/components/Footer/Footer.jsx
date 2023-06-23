import Logo from "../../image/LogoKasa.svg"
import "../../style/Footer.scss"


function Footer(){
  return(
<footer>
  <img style={{filter:"brightness(200)"}}src={Logo} alt="Notre Logo Kasa"></img>
    <p><i></i> 2020 Kasa. All rights reserved</p>
</footer>)

}

export default Footer