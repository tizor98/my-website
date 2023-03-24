import React from 'react';
import Header from './layout/Header'
import Cover from './body/Cover'
import ListProjects from './body/ListProjects'
import About from './body/About'

export default function App() {
   return (
      <React.Fragment>
         <Header />
         <Cover />
         <ListProjects />
         <About />
      </React.Fragment>
   );
}
