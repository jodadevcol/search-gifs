import ListGifs from "./components/list-gifs";
import "./App.css";

import { Link, Route } from "wouter"

function App() {

  return (
    <div className="App">
      <header>
        <Link to="/">Giffi</Link>
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
      <section className="App-content">
        <h1>GIFS</h1>
        <Route 
          component={ListGifs}
          path="/gifs/:keyword" />
        {/* <h2>Premier League</h2>
        <ListGifs keyword = 'premier league' />
        <h2>NBA</h2>
        <ListGifs keyword = 'lebron' /> */}
      </section>
    </div>
  );
}

export default App;
