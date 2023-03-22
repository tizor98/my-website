import React from "react"

export default function Header() {
   return (
      <header className="fixed-top bg-dark">
         <div className="container d-flex justify-content-between align-items-center">

         <h1 className="navbar-brand text-white">Alberto</h1>
         <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="navbarNavDropdown">
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="/">Projects</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="/">About me</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="/">Contact</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>

         </div>
      </header>
   )
}