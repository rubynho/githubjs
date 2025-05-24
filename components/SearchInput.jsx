'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './SearchInput.module.css';

import Input from './Input'
import Button from './Button'

import { fetchUser } from '@/lib/api/users'


export default function SearchInput() {
  const [data, setData] = useState({})
  const [image, setImage] = useState(null)

  const handleFetch = async () => {
    const data = await fetchUser('rubynho')
    console.log(data.avatar_url)
    setData(data)
    setImage(data.avatar_url)
  }

  return (
    <div className={styles.container}>
      <Image src={image} width={300} height={300} alt="GitHub" />
      <div>
        <Input name="username" placeholder="Type a GitHub username..." />
        <Button onClick={handleFetch}>Search</Button>
      </div>
    </div>
  )
}
