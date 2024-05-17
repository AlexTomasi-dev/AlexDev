
import { useState } from "react";

function DescLing() {


        const [opacita , modificaSfondo] = useState("0");

        const modifica = window.addEventListener("scroll", (e) =>{
        
            const scrollPosition = window.scrollY;

            const AltezzaVh = window.innerHeight;

            const ScrollPerc =0.7;

            if (scrollPosition > AltezzaVh * ScrollPerc){
                modificaSfondo("1");
            }else{
                modificaSfondo("0")
            }
       
    })
    return(
        <>
            <section>
                <div className="container mt-5 pt-5 ">
                    <div className="row " style={{ opacity: opacita, transition: "1.5s", transitionDelay: "0.3s" }}
                onScroll={modifica}>
                        <div className="col-12 col-sm-12 col-md-6 text-center ">
                            <h3>HTML</h3> <br />
                            <h3>CSS</h3>
                            
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 text-center text-md-start my-auto">
                           <p>Il mio primo passo, come ogni Dev, parte da Html e CSS.  <br />
                           Ho imparato le basi per la creazione, l'accessibilità, la SEO e lo stile di un sito Internet. <br />
                           Il mio percorso parte da Boolean, Udemy e da Codegrind. Ho iniziato così a macinare le mie prime ore da Web - developer 
	                        e a coltivare la mia passione in questo settore.
                           </p> 
                        </div>
                        <hr className="mt-4" />
                    </div>

                  

                    <div className="row mt-5" style={{ opacity: opacita, transition: "1.5s", transitionDelay: "0.7s" }}
                onScroll={modifica} >
                        <div className="col-12 col-sm-12 col-md-6 text-center text-center">
                            <h3>JAVASCRIPT</h3>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 text-center text-md-start my-auto ">
                           <p>Dopo aver effettuato il primo passo con HTML e Css, ho incominciato ad apprendere il primo linguaggio di programmazione.
                            Inizialmente è stato difficile, ma poi, con la pratica, è diventato sempre più semplice
                            grazie anche al corso che ho frequentato con la provincia di Trento di 90 ore. 
                            </p> 
                        </div>     
                        <hr className="mt-4" />               
                    </div>


                    <div className="row mt-5" style={{ opacity: opacita, transition: "1.5s", transitionDelay: "0.9s" }}
                onScroll={modifica}>
                        <div className="col-12 col-sm-12 col-md-6 text-center text-center">
                            <h3>BOOTSTRAP</h3>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 text-center text-md-start my-auto ">
                           <p>Sempre tramite il corso della provincia di Trento ho imparato ad usare Boostrap, 
		                    framework che mi ha aiutato a velocizzare il lavoro di progettazione di ogni attività.
                            </p> 
                        </div>    
                        <hr className="mt-4" />                
                    </div>


                    <div className="row mt-5" style={{ opacity: opacita, transition: "1.5s", transitionDelay: "1.2s" }}
                onScroll={modifica}>
                        <div className="col-12 col-sm-12 col-md-6 text-center text-center">
                            <h3>REACT</h3>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 text-center text-md-start my-auto ">
                           <p>React è la prima Libreria Javascript che ho appreso attraverso il corso gratuito su yt di Edoardo Midali. In questo modo ho velocizzato
                            ancora di più la creazione dell'interfaccia utente.
                            </p> 
                        </div>     
                        <hr className="mt-4" />              
                    </div>
                </div>
            </section>
        
        
        </>
    )
}
import "../stile/Descrizione.css"
export default DescLing