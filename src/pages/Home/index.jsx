/*import logo from '../../image/logo.svg';*/

import '../../style/App.scss';
import '../../style/home.scss'
import Banner from "../../components/Banner";
/*import Card from "../../components/Card";*/
import Gallery from"../../components/Gallery"
let underline

function Home() {
  underline = 1
  return (
    <div className="App"><Banner title={"Chez vous, partout et ailleurs"} />
      <Gallery/>
    </div>
  );
}

export default Home;
