import React from "react"

export default function Header() {
   return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark text-bg-dark">
         <div className="container">

            <h1 className="fs-2 text-white">Alberto</h1>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
               <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
               <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               </div>
               <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#header">Inicio</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link active" href="#projects">Proyectos</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link active" href="#about">Sobre mí</a>
                     </li>
                  </ul>
               </div>
            </div>

         </div>
      </nav>
   )
}
