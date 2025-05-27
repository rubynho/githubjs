'use client';

import { useState } from 'react';
import Image from 'next/image';

import styles from './GitHubProfile.module.css';

import SearchForm from './SearchForm'
import UserRepos from './UserRepos'

import { fetchUser } from '@/lib/api/users'


export default function GitHubProfile() {
  const [user, setUser] = useState()
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFetchUser = (e) => {
    e.preventDefault()
    setLoading(true)

    fetchUser(username).then((user) => {
      setUser(user)
      setLoading(false)
    })
  }

  return (
    <div>
      <SearchForm setUsername={setUsername} handleFetchUser={handleFetchUser} />
      {loading && <p>Loading...</p>}

      {console.log(user)}
      {user && (
        <div>
          <Image src={user.avatar_url} width={300} height={300} alt="GitHub user picture" />
          <h1>{user.bio}</h1>
          <div>
            <p>{user.following} following</p>
            <p>{user.followers} followers</p>
          </div >
        </div>
      )
      }

      {user && (
        <UserRepos username={user.login} />
      )}
    </div>
  )
}
