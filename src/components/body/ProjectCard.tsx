import Project from "../interfaces/Project"

type Props = {
   project: Project,
}

export default function ProjectCard({project}: Props) {
   return (
      <div className="card" style={{ width: "18rem" }}>
         <div className="card-img-top img-thumbnail d-flex align-items-center justify-content-center">
               <img src={project.logo} className="rounded img-project" alt={project.name} />
         </div>
         <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text h-60">{project.description}</p>
            <div className="d-flex justify-content-between">
               <a href={project.html_url} className="btn btn-dark" target="blank">Repositorio</a>
               <a href={project.homepage} className="btn btn-professional" target="blank">Míralo en la web</a>
            </div>
         </div>
      </div>
   )
}
