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

  let [cards] = useState(defaultCard);
  const idList = cards.map(card => {
    return (card.id)
  });
  const idListarray = Object.values(idList);
  let Housedetail;
  let equipmentsdetail;
  if(idListarray.includes(id) ){
    Housedetail = cards.find(house => house.id === id);
    equipmentsdetail = Housedetail.equipments.map(element => {
      return (<li key={element}>{element}</li>);
  });}


  useEffect(() => {
    setTimeout(function () {
      const about = document.getElementById("CallapseHouse");
      if (about) {
        about.className = "";
      }
    }, 750);
  }, [])
  return (
    <main>
      {idListarray.includes(id) ? <section className="HousingDetail" id={Housedetail.id}>
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