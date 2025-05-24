export async function fetchUser(username) {
  const res = await fetch(`https://api.github.com/users/${username}`)

  if (!res.ok) throw new Error('Failed to fetch GitHub user')

  return res.json()
}
