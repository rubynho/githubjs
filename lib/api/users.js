export async function fetchUser(username) {
  const res = await fetch(`https://api.github.com/users/${username}`)

  if (!res.ok) throw new Error('Failed to fetch GitHub user')

  return res.json()
}

export async function fetchRepos(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`)

  if (!res.ok) throw new Error('Failed to fetch user repositories')

  return res.json()
}
