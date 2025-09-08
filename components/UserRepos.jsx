'use client';

import { useEffect, useState } from 'react';

import { fetchRepos } from '@/lib/api/users'

import Repo from './Repo'


export default function UserRepos({ username }) {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetchRepos(username).then((repos) => {
      setRepos(repos)
    })
  }, [username])

  return (
    <div>
      {
        repos.map((repo) => {
          return <Repo key={repo.id} repo={repo} />
        })
      }
    </div>
  )
}
