import ListGifs from "./components/ListGifs";
import "./App.css";

import { Route } from "wouter"
import Header from "./containers/Header";

function App() {

  return (
    <div className="App">
      <Header/>
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
