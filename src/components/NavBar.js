import { Link } from "react-router-dom"
import { Form } from "./Form"

export const NavBar = () => {
  return (
    <header>
        <Link to='/'><h1>Website Title</h1></Link>
        <Form />
    </header>
  )
}