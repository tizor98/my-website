import React from "react"

export default function Header() {
   return (
      <header className="fixed fixed-top bg-black">
         <div className="container d-flex justify-content-between align-items-center">

            <h1 className="fs-2 text-white">Alberto</h1>
            <nav className="navbar navbar-expand-lg navbar-dark">
               <div className="container-fluid">
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
                              <a className="nav-link active" aria-current="page" href="#body">Inicio</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="#projects">Proyectos</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="#about">Sobre mí</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="#about">Contáctame</a>
                           </li>
                        </ul>
                     </div>
                  </div>

               </div>
            </nav>

         </div>
      </header>
   )
}
