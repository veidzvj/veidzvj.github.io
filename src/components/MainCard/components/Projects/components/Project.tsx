import './Project.css'

type ProjectProps = {
  name: string
  description: string
}

function Project({ name, description }: ProjectProps) {
  return (
    <div className="project-container">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Project
