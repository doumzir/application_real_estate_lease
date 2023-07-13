import React, {useEffect, useState} from "react";
import backgroundAbout from '../../image/backgroundabout.jpg'
import Banner from "../../components/Banner";
import Collapse from "../../components/collapse";

import "../../style/about.scss"
const ABOUT_COLLAPSES= [
  {
    id: 1,
    content:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
    title:"Fiabilité",
  },
  {
    id: 2,
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    title:"Respect"
  },
  {
    id: 3,
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    title:"Service"
  },
  {
    id: 4,
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    title:"Sécurité"
  },
]
function About(){
  const [collapses] = useState(ABOUT_COLLAPSES);
  const collapsesList = collapses.map(collapse =>{
    return (<Collapse key={collapse.id} id={collapse.id } title={collapse.title} content={collapse.content} />);
  });
  useEffect(() => {
    setTimeout(function(){
      const about = document.getElementById("about");
      if (about) {
        about.className = "";}
    },750);
  }, [])


  return (
    <div className={"preload"} id="about"> <Banner title={""} img={backgroundAbout} />
      {collapsesList}
    </div>
  );
}
export default About