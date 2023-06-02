import { useState } from "react"
import './Form.css'

export const Form = ({setKeyword}) => {
  const [search, setSearch] = useState('')

  const submitSearch = (e) => {
    e.preventDefault()
    setKeyword(search)
  }

  return (
    <form>
      <input type='text' value={search} placeholder="Search" onChange={e => setSearch(e.target.value)} />
      <button type="submit" onClick={e => submitSearch(e)}>Search</button>
    </form>
  )
}