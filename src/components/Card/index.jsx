import '../../style/card.scss'
import img from '../../image/montain.jpg'
function Card(){
  return(
  <div className='card' style={{background:"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)"}}>


    <img src={img} alt='real estate'></img>
    <h2>Titre de la location</h2>
</div>)
}
export default Card