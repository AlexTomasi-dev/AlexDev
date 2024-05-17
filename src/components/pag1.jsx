import NavBar from "./NavBar"
import Header from "./Header"

import Des from "./descrizione"
import Lavori from "./Lavori-passati"
import Contatti from   "./contact"
import Footer from "./footer"
import Liguaggi from "./liguaggi"
import DescLing from "./desc-linguaggi"

function Pag1 () {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <Liguaggi></Liguaggi>
            <Des></Des>
            
            <DescLing></DescLing>
            
            
            
            <Contatti></Contatti>
          
        </div>
    )
}
import "../stile/Header.css"
export default Pag1