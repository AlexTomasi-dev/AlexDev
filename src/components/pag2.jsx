import NavBar from "./NavBar"
import Header from "./Header"

import Des from "./descrizione"
import Lavori from "./Lavori-passati"
import Contatti from   "./contact"
import Footer from "./footer"
import Liguaggi from "./liguaggi"

function Pag2(){

    return (
        <>
        <NavBar></NavBar>
        <Header></Header>
        
        <Lavori></Lavori>
        
        <Contatti></Contatti>
        
          
       
        
        </>
    )
}
import "../stile/Header.css"
export default Pag2