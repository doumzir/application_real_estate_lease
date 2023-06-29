
import { useParams } from 'react-router-dom'
import defaultCard from "../../defaultCard.json"
import React, {FunctionComponent, useState} from "react";
import Error from "../../components/Error"


function Housing() {
  const {id} = useParams();
  const truc = id;

  console.log(truc)
  let [cards] = useState(defaultCard);

  /*
console.log(
  [cards].include(id))*/
  const idList = cards.map(card => {
    return (card.id)
  });
  const idListarray = Object.values(idList)
  console.log(idListarray.includes("truc"))/*
  console.log(idList.include("112"))*/

  return (

    <div>
      {idListarray.includes(truc) ? (<h2>{id}</h2>) : (<Error/>)}
 </div>
  )
}
export default Housing