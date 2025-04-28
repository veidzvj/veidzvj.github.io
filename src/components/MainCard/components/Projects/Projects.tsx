import Project from './components/Project'
import './Projects.css'

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>

      <div className="inner-projects-container">
        <Project name="a" description="b" />
        <Project name="a" description="b" />
        <Project name="a" description="b" />
        <Project name="a" description="b" />
        <Project name="a" description="b" />
        <Project name="a" description="b" />
        <Project name="a" description="b" />
        <Project name="a" description="b" />
      </div>
    </div>
  )
}

export default Projects
