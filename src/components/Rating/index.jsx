import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import "../../style/Rating.scss"
function Rating({rate}){
return(
  <div id='Rating'>
    { rate >= 1 ? <FontAwesomeIcon icon={faStarSolid} />: <FontAwesomeIcon className="regular" icon={faStarSolid} />}
    { rate >= 2 ? <FontAwesomeIcon icon={faStarSolid} />: <FontAwesomeIcon className="regular" icon={faStarSolid} />}
    { rate >= 3 ? <FontAwesomeIcon icon={faStarSolid} />: <FontAwesomeIcon className="regular" icon={faStarSolid} />}
    { rate >= 4 ? <FontAwesomeIcon icon={faStarSolid} />: <FontAwesomeIcon className="regular" icon={faStarSolid} />}
    { rate >= 5 ? <FontAwesomeIcon icon={faStarSolid} />: <FontAwesomeIcon className="regular" icon={faStarSolid} />}

  </div>

)

}
export default Rating