import React from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer'
import Cover from './body/Cover'
import ListProjects from './body/ListProjects'
import ContactMe from './body/ContactMe'

export default function App() {
   return (
      <React.Fragment>
         <Header />
         <div className='mt-5'></div>
         <Cover />
         <ListProjects />
         <ContactMe />
         <Footer />
      </React.Fragment>
   );
}
