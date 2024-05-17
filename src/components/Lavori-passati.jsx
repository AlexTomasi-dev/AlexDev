
import { useState } from "react";







function Lavori() {

        const [opacita , modificaSfondo] = useState("0");
        const [font, modificaMargin] = useState("0px");

        const modifica = window.addEventListener("scroll", (e) =>{
            const scrollPosition = window.scrollY;
            const AltezzaVh = window.innerHeight;
            const ScrollPerc =0.5;
                if (scrollPosition > AltezzaVh * ScrollPerc){
                    modificaSfondo("1");
                }else{
                    modificaSfondo("0")
                }


                if(scrollPosition > AltezzaVh * 0.2){
                    modificaMargin("4em")
                }else{
                    modificaMargin("0")
                }

            })

      

    return(
        <>
       
        <section>
            <div className="container mt-5 pt-5 p-5">
                <div className="row text-center"
                style={{
                        transition:"2.5s", 
                        transitionDelay:"0.5",
                        fontSize: font,  
                        color: "#A4A4A4", 
                        lineHeight: "1em" 
                    }}
                onScroll={modifica}
                >

                    <div className="col-12  ">
                        <span>ATTIVITA' PASSATE</span>
                    </div>
                </div>




                <div className="row mt-2 pt-5 "
                    style={{ opacity: opacita, transition: "1.5s", transitionDelay: "0.3s" }}
                    onScroll={modifica} >

                    
                    <div className="col-12 col-sm-12 col-md-6 text-center   my-auto ">
                        <h3 >Margoni Auto S.P.A</h3>
                        <div className="Logo mx-auto ">
                            <a href="https://www.fordmargoniauto.it/"  target="_blank" title="Link al sito internet Margoni auto">
                                <img src="src/assets/Margoni-logo.png" alt="Logo Margoni Auto spa" />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 text-center text-md-start mt-5 ">
                        <p >Accettatore/Responsabile carrozzeria</p>
                        <p>Da gennaio 2023 a dicembre 2023 ho lavorato presso La Margoni auto (sede di Trento nord) con mansioni di Accettatore/ Responsabile all'interno della carrozzeria.
                        </p>
                    </div>
                    <hr className="mt-4" /> 

                </div>








                <div className="row row-2 mt-5 pt-5" style={{ opacity: opacita, transition: "1.5s" , transitionDelay: "0.5s"}}
                onScroll={modifica}>
                    
                    
                    <div className="col-12 col-sm-12 col-md-6 text-center   my-auto ">
                        <h3 >Carrozzeria Luca Fellin</h3>
                        <div className="Logo mx-auto">
                            <a href="https://www.fellincar.it/ " target="_blank" title="Link al sito internet Carrozzeria Luca Fellin">
                                <img src="src/assets/Fellin-logo.png" alt="Logo Carrozzeria Luca Fellin" />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 text-center text-md-start my-auto ">
                        <p className="mt-3" >Accettatore carrozzeria</p>
                        <p>Dal 2017 a fine 2022 ho lavorato presso La carrozzeria Luca Fellin (sede di Trento nord, Spini di Gardolo) con mansioni di accettazione, gestione degli appuntamenti e comunicazione diretta con assicurazioni, periti e liquidatori. 
                        </p>
                    </div>
                    <hr className="mt-4" /> 
                </div>


                <div className="row row-3 mt-5 pt-5" style={{ opacity: opacita, transition: "1.5s", transitionDelay: "0.7s" }}
                onScroll={modifica}>
                    
                    <div className="col-12 col-sm-12 col-md-6 text-center   my-auto ">
                        <h3 >Agom Vodafone</h3>
                        <div className="Logo mx-auto">
                            <a href="https://www.agomnetwork.it/" target="_blank" title="Link al sito internet Agom Vodafone">
                                <img src="src/assets/Agom-logo.png" alt="Logo Agom Vodafone" />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 text-center text-md-start my-auto  ">
                        <p className="mt-3" >Back office</p>
                        <p>Dal 2016 al 2017 ho lavorato presso Agom Vodafone come impiegato back office.
                        </p>
                    </div>
                    <hr className="mt-4" /> 
                </div>


                <div className="row row-4 mt-5 pt-5 " style={{ opacity: opacita, transition: "1.5s", transitionDelay: "0.9s" }}
                onScroll={modifica}>
                    
                    <div className="col-12 col-sm-12 col-md-6 text-center   my-auto ">
                        <h3 >Supermercati Poli</h3>
                        <div className="Logo mx-auto">
                            <a href="https://www.gruppopoli.it/it/" target="_blank" title="Link al sito internet Supermercati Poli">
                                <img src="src/assets/Poli-logo.png" alt="Logo Supermercati Poli" />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 text-center text-md-start my-auto  ">
                        <p className="mt-3" >Addetto vendita prodotti alimentari</p>
                        <p>Nel 2016 ho lavorato per il supermercato Poli nella sede di Pergine, presso la quale mi occupavo di servire la clientela al banco dei salumi.
                        </p>
                    </div>
                    <hr className="mt-4" /> 
                </div>

                <div className="row row-5 mt-5 pt-5 border-css " style={{ opacity: opacita, transition: "1.5s", transitionDelay: "1.1s" }}
                onScroll={modifica}>
                    
                    
                    <div className="col-12 col-sm-12 col-md-6 text-center   my-auto ">
                        <h3 >Itas Assicurazioni</h3>
                        <div className="Logo mx-auto">
                            <a href="https://www.gruppoitas.it/homepage" target="_blank" title="Link al sito internet Itas Assicurazioni">
                                <img  src="src/assets/Itas-logo.png" alt="Logo Itas assicurazioni" />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 text-center text-md-start my-auto ">
                        <p className="mt-3" >Assicuratore P.iva</p>
                        <p>La mia prima esperienza nel mondo del lavoro è stato presso l'agenzia assicurativa Assicuritas, come consulente assicurativo, iscritto all'IVAS.
                        </p>
                    </div>
                    <hr className="mt-4" /> 
                </div>

                <div className="row row-5 mt-5 pt-5 border-css " style={{ opacity: opacita, transition: "1.5s", transitionDelay: "1.1s" }}
                onScroll={modifica}>
                    <div className="col mt-auto p-css text-center">
                       <p>Sperimentando ambienti lavorativi molto differenti tra loro, ho avuto modo di sviluppare competenze sia relazionali che comunicative ed organizzative. Ciò mette in risalto anche la flessibilità rispetto ai ruoli ricoperti e alle mansioni svolte, nonché la volontà di apprendere e mettermi alla prova costantemente. </p>
                        
                    </div>
                </div>
            </div>
        </section>

        
        </>
    )


    
}
import "../stile/Lavori-passati.css"
export default Lavori