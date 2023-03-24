import profileImg from '../../assets/img/photo.jpeg'

export default function About() {
   return (
      <section id="about" className="py-5 text-bg-dark">
         <div className="container-fluid d-flex flex-column align-items-center justify-content-center gap-4">
            
            <h2 className="section-title fw-bold mt-4">Sobre mí</h2>

            <div id="profile-card" className='container'>
               <div className="profile-img m-auto"><img src={profileImg} alt="Alberto" className='img-thumbnail w-100' /></div>
               <h4 className='px-4 pt-3'>Alberto Ortiz</h4>
               <div className='px-4 d-flex gap-3 fs-4'>
                  <a className='text-white' href="https://github.com/tizor98" target='blank'><i className='bi bi-github' ></i></a>
                  <a className='text-white' href="https://www.linkedin.com/in/baob/" target='blank'><i className='bi bi-linkedin' ></i></a>
                  <a className='text-white' href="mailto:baortiz98@outlook.com"><i className='bi bi-envelope-at-fill' ></i></a>
               </div>
               <h5 className='px-4'>Desarrollador de Software</h5>
               <p className='px-4 text m-0'>Soy un Desarrollador de Software con pasión por el desarrollo Backend. Por el momento me centro en Java y Typescript junto con sus frameworks para backend y frontend usando principalmente azure para desplegar.</p>
               <p className='px-4 text m-0'>Previamente trabajé casi 2 años como consultor de negocios en dónde después de varios proyectos en tecnología decidí pasarme a programar directamente.</p>
               <p className='px-4 text'>Para contactarme puedes encontrarme usando la opción que prefieran dentro de la info de contacto en cada logo.</p>
            </div>

         </div>
      </section>
   )
}
