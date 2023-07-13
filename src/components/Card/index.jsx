import '../../style/card.scss'
import { Link } from 'react-router-dom'
import {Outlet} from "react-router-dom";

function Card({title, cover, id}){
  return(

  <div className='card' id={id} /*style={{background:"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)"}}*/>
    <Link to={`/house/${id}`} >
    <img src={cover} alt='real estate'></img>
    <div className="radiant" style={{background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5"}}></div>
    <h2>{title}</h2>

    </Link>
</div>)
}

export default Card