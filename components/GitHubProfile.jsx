'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Github, LoaderCircle, MapPin, UserRoundPlus, UserRoundCheck } from 'lucide-react';

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
    <div className={styles.github_profile}>
      <div className={styles.header}>
        <Github size={100} />
        <h1>GitHub Profile</h1>
      </div>

      <SearchForm setUsername={setUsername} handleFetchUser={handleFetchUser} />
      {loading && <div className={styles.loading}><LoaderCircle /> Loading...</div>}

      {console.log(user)}
      {user && (
        <div className={styles.main}>
          <h1>{user.name}</h1>
          <div>
            <p><UserRoundPlus /><b>{user.following}</b> following</p>
            <p><UserRoundCheck /><b>{user.followers}</b> followers</p>
            <p><MapPin /> {user.location}</p>
          </div >

          <Image src={user.avatar_url} width={300} height={300} alt="GitHub user picture" />

          <h2>{user.bio}</h2>
        </div>
      )
      }

      {user && (
        <UserRepos username={user.login} />
      )}
    </div>
  )
}
