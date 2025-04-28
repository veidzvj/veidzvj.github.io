import { useEffect, useState } from 'react'
import Project from './components/Project'
import { fetchGithubRepos, Repo } from '../../../../services/githubService'
import './Projects.css'

function Projects() {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    fetchGithubRepos().then((data) => setRepos(data))
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
