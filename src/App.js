import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Beers from './components/Beers';
// import RandomBeer from './components/RandomBeer';
// import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>Welcome to IronBeers 🍻</p>
        {/* <BrowserRouter>
          <Switch>
            <Route path="/beers" component={Beers} exact />
            <Route path="/random-beer" component={RandomBeer} />
            <Route path="/new-beer" component={NewBeer} />
          </Switch>
        </BrowserRouter> */}
      </header>
    </div>
  );
}

export default App;
