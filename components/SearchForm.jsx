import styles from './SearchForm.module.css';

import Input from './Input'
import Button from './Button'

export default function SearchForm({ setUsername, handleFetchUser }) {
  return (
    <div className={styles.container}>
      <form onSubmit={handleFetchUser}>
        <Input onChange={(e) => setUsername(e.target.value)} name="username" placeholder="Type a GitHub username..." />
        <Button type="submit">Search</Button>
      </form>
    </div >
  )
}
