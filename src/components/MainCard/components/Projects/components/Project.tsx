import './Project.css'

type ProjectProps = {
  name: string
  description?: string
  url: string
}

function Project({ name, description, url }: ProjectProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-container"
    >
      <h1>{name}</h1>
      <p>{description}</p>
    </a>
  )
}

export default Project
