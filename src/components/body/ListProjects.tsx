import Project from "../interfaces/Project"
import ProjectCard from "./ProjectCard"

const projects: Array<Project> = []

export default function ListProjects() {
   return (
      <>
      { projects.map(project => {
         return (<ProjectCard></ProjectCard>)
      }) }
      </>
   )
}