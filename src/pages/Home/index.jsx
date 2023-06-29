/*import logo from '../../image/logo.svg';*/

import '../../style/App.scss';
import '../../style/home.scss'
import backgroundMontain from'../../image/montain.jpg'

import Banner from "../../components/Banner";
/*import Card from "../../components/Card";*/
import Gallery from"../../components/Gallery"
import React from "react";


function Home() {

  return (
    <div className="home"><Banner title={"Chez vous, partout et ailleurs"} img={backgroundMontain} />
      <Gallery/>

    </div>
  );
}

export default Home;
