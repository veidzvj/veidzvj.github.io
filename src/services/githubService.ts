export type Repo = {
  id: number
  name: string
  description: string
  html_url: string
}

async function fetchGithubRepos(): Promise<Repo[]> {
  const response = await fetch(`https://api.github.com/users/evrwaqe/repos`)
  if (!response.ok) {
    throw new Error('Error searching for repos')
  }

  const data = await response.json()
  return data
}

export { fetchGithubRepos }
