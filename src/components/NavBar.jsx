
import { Link } from "react-router-dom";


function NavBar(){

    function tornasu(){

        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

    return (
        <>
        <section className='navbar-css '  >
            <div className="container text-center ">
                <div className="row row-css ">
                    <div className="col-6  my-auto link">     
                        <Link onClick={tornasu} to={`/`}> <span className='pallino me-3'></span>Chi Sono</Link>
                    </div>
                    <div className="col-6  col my-auto  link">
                        <Link onClick={tornasu} to={`/pag2`} > <span className='pallino me-3' ></span>C.V</Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

import '../stile/navbar.css'
export default NavBar