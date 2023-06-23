import React, {useEffect, useState} from "react";


import '../../style/gallery.scss'

import Card from "../Card";
import defaultCard from "../../defaultCard.json"


function Gallery() {
  let [cards, setCard] = useState(defaultCard);
  const CardList = cards.map(card => {
    return (<Card key={card.id} title={card.title} cover={card.cover}/>);
  });
  return (
    <div className='gallery'>
      {CardList}
    </div>
  )
}

export default Gallery