import Project from "../interfaces/Project"
import ProjectCard from "./ProjectCard"

const projects: Project[] = [
   {
      name: 'Liebre Market',
      description: 'Una simple tienda online inspirada en Mercado Libre con las funcionalidades básicas de un ecommerce. Para probarla ten en cuenta que la carga inicial demora un poco pero después es fluido.',
      homepage: 'https://liebre-market.azurewebsites.net',
      language: 'JavaScript',
      html_url: 'https://github.com/tizor98/liebre-market',
      logo: 'https://raw.githubusercontent.com/tizor98/liebre-market/00273244bf161878119fb1cb08b083ba81063aff/public/img/logo-mercado-liebre.svg',
   },
   {
      name: 'ToDo App',
      description: 'Con esta herramienta puedes escribir notas para recordar tareas que debas realizar en un futuro.',
      homepage: 'https://todo.alberto.software',
      language: 'TypeScript',
      html_url: 'https://github.com/tizor98/to-do',
      logo: 'https://raw.githubusercontent.com/tizor98/to-do/main/public/logo.png',
   },
]

export default function ListProjects() {
   return (
      <section id="projects" className="d-flex flex-column align-items-center justify-content-center gap-3 p-5">
         <h2 className="fw-bold mt-4">Proyectos</h2>
         <div>
            <p className="m-0">Estos son los proyectos FullStack o Front desplegados en un plataforma de nube (ej: Azure). Una lista más completa (incluyendo proyectos de Back) la puedes encontrar en mi repositorio de github.</p>
            <p>Todos han sido creados con propositos de testeo y de aprendizaje únicamente.</p>
         </div>
         <div className="container d-flex flex-column flex-md-row flex-md-wrap gap-3 align-items-center justify-content-center">
            {(projects.length > 0 && projects.map( (project, index) => <ProjectCard project={project} key={index} />))
            || <h2>Cargando...</h2>}
         </div>
         <p className="p-3">Además, por si te lo estás preguntando. Este sitio se escribió usando TypeScript con React y Bootstrap perzonalizado con Sass. Aquí puedes encontrar el repo: <a href="https://github.com/tizor98/my-website" target="blank" className="link-professional">My Website</a></p>
      </section>
   )
}
