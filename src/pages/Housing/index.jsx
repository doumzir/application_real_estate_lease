
import { useParams } from 'react-router-dom'
import defaultCard from "../../defaultCard.json"
import React, {FunctionComponent, useState} from "react";
import Error from "../../components/Error"
import Collapse from "../../components/collapse";
import Carrousel from "../../components/Carrousel";
import Details from "../../components/Details";

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
      {idListarray.includes(truc) ? <section id={Housedetail.id}>
        <Carrousel pictures={Housedetail.pictures} />
        <Details title={Housedetail.title} tags={Housedetail.tags} location={Housedetail.location} />
        <h2>{Housedetail.title}</h2><p>{Housedetail.location}</p>
        <p>{Housedetail.tags[0]}</p><p>{Housedetail.tags[1]}</p><p>{Housedetail.tags[2]}</p>
        <div><p>{Housedetail.host.name}</p><img src={Housedetail.host.picture} alt=""/></div>
        <p>{Housedetail.rating}</p>
      <Collapse  key="1" title={"Description"} content={Housedetail.description}></Collapse>
      <Collapse  key="2" title={"Equipements"} equipment={equipmentsdetail}></Collapse> </section> : (<Error/>)}
 </main>
  )
}
export default Housing