
import { useParams } from 'react-router-dom'
import defaultCard from "../../defaultCard.json"
import React, {FunctionComponent, useState} from "react";
import Error from "../../components/Error"
import Collapse from "../../components/collapse";


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
  console.log(cards);
  const idListarray = Object.values(idList);
  console.log(idListarray.includes("truc"))/*
  console.log(idList.include("112"))*/
const Housedetail = cards.find(house => house.id === truc);
  const equipmentsdetail = Housedetail.equipments.map(element =>{return(<li key={element}>{element}</li>);});
console.log(Housedetail)
console.log(equipmentsdetail)
 return (
    <main>
      {idListarray.includes(truc) ? <section>
        <h2>{Housedetail.title}</h2><p>{Housedetail.location}</p>
      <Collapse  key="1" title={"Description"} content={Housedetail.description}></Collapse>
      <Collapse  key="2" title={"Equipements"} equipment={equipmentsdetail}></Collapse> </section> : (<Error/>)}
 </main>
  )
}
export default Housing