import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'

import '../../style/gallery.scss'

import Card from "../Card";
import defaultCard from "../../defaultCard.json"


function Gallery() {
  let [cards] = useState(defaultCard);
  const CardList = cards.map(card => {
    return (<Card key={card.id} id={card.id} title={card.title} cover={card.cover}/>);
  });
  return (
    <div className='gallery'>
      {CardList}
    </div>
  )
}

export default Gallery