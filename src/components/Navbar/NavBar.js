import { Link } from "react-router-dom";
import { Form } from "../Form/Form";
import './NavBar.css';

export const NavBar = ({setKeyword}) => {
  return (
    <nav>
        <Link to='/'><h1>Tech Landing</h1></Link>
        <Form setKeyword={setKeyword}/>
    </nav>
  );
}