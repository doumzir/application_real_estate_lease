

import  { useEffect, useState} from "react";

import '../../style/Collapse.scss'
import arrowIcon from '../../image/icon/arrow.svg'

function Collapse({id, title, content, equipment}) {
const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={isOpen? "collapse hidden" : " collapse active"} id={id} onClick={() => setIsOpen(!isOpen)}>

      <h2>{title} <img src={arrowIcon}></img></h2>

      {content ? <p>{content}</p> : <ul>{equipment}</ul>}

    </div>
  )
}

export default Collapse