export type Repo = {
  id: number
  name: string
  description: string
  html_url: string
}

let cachedRepos: Repo[] | null = null

async function fetchGithubRepos(): Promise<Repo[]> {
  if (cachedRepos) {
    return cachedRepos
  }

  const response = await fetch(`https://api.github.com/users/evrwaqe/repos`)
  if (!response.ok) {
    throw new Error('Error searching for repos')
  }

  const data = await response.json()
  cachedRepos = data

  return data
}

export { fetchGithubRepos }
