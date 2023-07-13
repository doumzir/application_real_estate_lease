import React from "react";
import "../../style/owner.scss"
function Owner({name, picture}){
  console.log(name.length + " " +  name);
  let firstName = name.split(" ")[0];
  let secondName =  name.split(" ")[1];
  console.log(firstName + " mon prenom");

  return  (
    <div id='Owner'> <p>{firstName}</p> <p>{secondName}</p><img src={picture} alt=""/></div>
  )
}
export default Owner