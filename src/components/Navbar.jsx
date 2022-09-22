import React from 'react';
import Form from './Form';
import Dropdow from './Dropdow';
import Secciones from './Secciones';
import Cartwidget from './Cartwidget/Cartwidget';

//todo codigo por ejemplo el objeto[] se antes de RETURN
const Navbar = () => {
  const listDrowdon = ["Facial", "Corporal", "Cabello", "Servicios"]
    return (
        
        <>

           <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
             <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
               <Secciones/>    
               <Dropdow lista= {listDrowdon}/>
             </ul>
             <Form busqueda="Buscar productos"/>
             <ul>
              <a className="nav-link" href="#"><Cartwidget/></a>
             </ul>
               
           </div>
        </div>
     </nav> 
        </> 
    );
}

export default Navbar;
