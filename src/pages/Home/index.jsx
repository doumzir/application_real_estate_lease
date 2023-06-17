/*import logo from '../../image/logo.svg';*/

import '../../style/App.scss';
import Banner from "../../components/Banner";
/*import Card from "../../components/Card";*/
import Gallery from"../../components/Gallery"

function Home() {
  return (
    <div className="App"><Banner title={"Chez vous, partout et ailleurs"} />
      <Gallery/>
    </div>
  );
}

export default Home;
