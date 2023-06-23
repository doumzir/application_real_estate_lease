import React, {useEffect, useState} from "react";
import backgroundAbout from '../../image/backgroundabout.jpg'
import Banner from "../../components/Banner";
import Collapse from "../../components/collapse";


const ABOUT_COLLAPSES= [
  {
    id: 1,
    content:"truc",
    title:"title",
  },
  {
    id: 2,
    content: "truc",
    title:"title2"
  },
  {
    id: 3,
    content: "truc3",
    title:"title3"
  },
  {
    id: 4,
    content: "truc4",
    title:"title4"
  },
]
function About(){

  const [collapses] = useState(ABOUT_COLLAPSES);
  const collapsesList = collapses.map(collapse =>{
    return (<Collapse key={collapse.id} id={collapse.id } title={collapse.title} content={collapse.content} />);
  });

  return (
    <div> <Banner title={""} img={backgroundAbout} />
      {collapsesList}

    </div>
  );
}
export default About