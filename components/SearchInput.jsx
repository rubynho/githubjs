'use client';

import Input from './Input'
import Button from './Button'

export default function SearchInput() {
  return (
    <>
      <Input name="username" placeholder="Type a GitHub username..." />
      <Button onClick={() => console.log("clicked")}>Search</Button>
    </>
  )
}
