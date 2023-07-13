import {useParams} from 'react-router-dom'
import defaultCard from "../../defaultCard.json"
import React, {useEffect, useState} from "react";
import Error from "../../components/Error"
import Collapse from "../../components/collapse";
import Carrousel from "../../components/Carrousel";
import Details from "../../components/Details";
import Owner from "../../components/Owner";
import Rating from "../../components/Rating";
import "../../style/Housing.scss"

function Housing() {
  const {id} = useParams();
  const truc = id;

  console.log(id + "iici l'id")
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
  const Housedetail = cards.find(house => house.id === id);
  const equipmentsdetail = Housedetail.equipments.map(element => {
    return (<li key={element}>{element}</li>);
  });
  console.log(Housedetail)
  console.log(equipmentsdetail) ;
  useEffect(() => {
    setTimeout(function(){
      const about = document.getElementById("CallapseHouse");
      if (about) {
        about.className = "";}
    },750);
  }, [])
  return (
    <main>
      {idListarray.includes(truc) ? <section className="HousingDetail" id={Housedetail.id}>
        <Carrousel pictures={Housedetail.pictures}/>
        <Details title={Housedetail.title} tags={Housedetail.tags} location={Housedetail.location}/>
        <div id="PersonalDetail">
          <Owner name={Housedetail.host.name} picture={Housedetail.host.picture}/>
          <Rating rate={Housedetail.rating}/></div>
        <div id="CallapseHouse" className={"preload"}>
          <Collapse key="1" title={"Description"} content={Housedetail.description}></Collapse>
          <Collapse key="2" title={"Equipements"} equipment={equipmentsdetail}></Collapse></div>
      </section> : (<Error/>)}
    </main>
  )
}

export default Housing