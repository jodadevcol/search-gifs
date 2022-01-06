import { Link } from "wouter"
import "./header.css"
import logo from "../../logo.svg"

function Header() {
  return (
    <header>
      <Link href="/">
        <img alt="Search Gifs Logo" src={logo} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/gifs/sports">Sports</Link>
          </li>
          <li>
            <Link to="/gifs/literature">Literature</Link>
          </li>
          <li>
            <Link to="/gifs/actors">Actors</Link>
          </li>
          <li>
            <Link to="/gifs/christmas">Christmas</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header