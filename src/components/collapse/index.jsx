

import  { useState} from "react";

import '../../style/Collapse.scss'
import arrowIcon from '../../image/icon/arrow.svg'

function Collapse({id, title, content}) {
const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={isOpen? "collapse" : " collapse active"} id={id} onClick={() => setIsOpen(!isOpen)}>

      <h2>{title} <img src={arrowIcon}></img></h2>

      <p>{content}</p>

    </div>
  )
}

export default Collapse