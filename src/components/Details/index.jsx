import React from "react";

function Details({title, tags, location}) {
  return (<div><h2>{title}</h2><p>{location}</p>
    <p>{tags[0]}</p><p>{tags[1]}</p><p>{tags[2]}</p>
  </div>)
}

export default Details