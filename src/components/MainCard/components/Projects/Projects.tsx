import { useEffect, useState } from 'react'
import Project from './components/Project'
import './Projects.css'

type Repos = {
  id: number
  name: string
  description: string
  html_url: string
}

function Projects() {
  const [repos, setRepos] = useState<Repos[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/evrwaqe/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepos(data)
      })
      .catch((error) => console.error('Error searching for projects:', error))
  }, [])

  return (
    <div className="projects-container">
      <h1>Projects</h1>

      <div className="inner-projects-container">
        {repos.map((repo) => (
          <Project
            key={repo.id}
            name={repo.name}
            description={repo.description}
            url={repo.html_url}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
