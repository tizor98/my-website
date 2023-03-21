import React from 'react';
import Header from './layout/Header'

export default function App() {
   return (
      <React.Fragment>
         <Header />

         <div className='d-flex flex-column align-items-center justify-content-center bg-dark text-white' style={{ height: "100vh" }}>
            <h1>Hola, este sitio se encuentra en construcción :)</h1>
            <p>Por ahora puedes dirigirte a: <a href="https://github.com/tizor98">Github page</a></p>
         </div>
      </React.Fragment>
   );
}
