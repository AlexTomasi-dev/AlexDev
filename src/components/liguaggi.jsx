
import { useState } from "react";


function Liguaggi() {

  const [opacita, modificaOpacita] = useState(0);



  const modificaValore = window.addEventListener("scroll", (e) =>{
        
        const scrollPosition = window.scrollY;

        const AltezzaVh = window.innerHeight;

        const ScrollPerc =0.2;

        

        if(scrollPosition > AltezzaVh * ScrollPerc){
           
            modificaOpacita("1")

        }else{
            modificaOpacita("0")
        }

    })

    

    return(
        <>
        <section className=" mt-5 pt-5 ">
            <div className="container">
                
                <div className="row img-css mt-3">
                    
                    <div className="col "style={{
                        opacity: opacita,
        
                        transitionTimingFunction: "ease-in",
                        transitionDelay: "0.3s",
                        transitionDuration:"0.5s",
                    }} 
                        
                       
                      onScroll={modificaValore}> 
                        <img  src="src/assets/html.png" alt="" />
                    </div>

                    <div className="col"   style={{
                        opacity: opacita,
        
                        transitionTimingFunction: "ease-in",
                        transitionDelay: "0.5s",
                        transitionDuration:"0.5s",
                    }} 
                    onScroll={modificaValore}>
                        <img  src="src/assets/css.png" alt="" />
                    </div>

                    <div className="col"   style={{
                        opacity: opacita,
        
                        transitionTimingFunction: "ease-in",
                        transitionDelay: "0.7s",
                        transitionDuration:"0.5s",
                    }} 
                    onScroll={modificaValore} >
                        <img  src="src/assets/js.png" alt="" />
                    </div>

                    <div className="col"  style={{
                        opacity: opacita,
        
                        transitionTimingFunction: "ease-in",
                        transitionDelay: "0.9s",
                        transitionDuration:"0.5s",
                    }} 
                    onScroll={modificaValore}>
                        <img  src="src/assets/bootstrap.png" alt="" />
                    </div>

                    <div className="col"   style={{
                        opacity: opacita,
        
                        transitionTimingFunction: "ease-in",
                        transitionDelay: "1.1s",
                        transitionDuration:"0.5s",
                    }} 
                    onScroll={modificaValore}>
                        <img   src="src/assets/react.png" alt="" />
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}
import "../stile/liguaggi.css"
export default Liguaggi