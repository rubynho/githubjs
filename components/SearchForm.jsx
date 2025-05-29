import styles from './SearchForm.module.css';

import Input from './Input'
import Button from './Button'

export default function SearchForm({ setUsername, handleFetchUser }) {
  return (
    <form onSubmit={handleFetchUser} className={styles.container}>
      <Input onChange={(e) => setUsername(e.target.value)} required name="username" placeholder="Type a GitHub username..." />
      <Button type="submit">Search</Button>
    </form >
  )
}
