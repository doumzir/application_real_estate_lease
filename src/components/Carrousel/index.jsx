import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import '../../style/Carrousel.scss'

function Carrousel(pictures) {
  let [images] = Object.values(pictures);
  const Carrouselimg = images.map((image, index) => {
    return (<img key={index} id={index} src={image} alt='photo appartement'/>);
  });

  const [index, setIndex] = useState(0);
  const length = images.length;
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  return (
    <div className='Carrousel'>
      <div className='Imgdiv' id="Imgdiv" style={{left: `-${index}00%`}}>{Carrouselimg}`</div>
      {images.length > 1 ?
        <div className="arrow"><FontAwesomeIcon icon={faChevronUp} rotation={270} onClick={handlePrevious}/>
          <p id="NumberImage">{index+1}/{length}</p>
          <FontAwesomeIcon icon={faChevronUp} rotation={90} onClick={handleNext}/></div> : ("")}
      <p>{index}</p></div>
  );
}

export default Carrousel