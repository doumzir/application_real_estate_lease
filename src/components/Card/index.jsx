import '../../style/card.scss'

function Card({title, cover}){
  return(

  <div className='card' /*style={{background:"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)"}}*/>
    <img src={cover} alt='real estate'></img>
    <div className="radiant" style={{background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5"}}></div>
    <h2>{title}</h2>
</div>)
}

export default Card