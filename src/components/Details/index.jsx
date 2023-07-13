import React, {useState} from "react";
import "../../style/detail.scss"
function Details({title, tags, location}) {
  let [tagsItem] = useState(tags);
  const tagList = tagsItem.map((tag, index) => { return(<li key={index} id={index} >{tag}</li>);});
  return (<div id="Detail"><h2>{title}</h2><p>{location}</p>
    <ul id="tagList">
    {tagList}</ul>
  </div>)
}

export default Details