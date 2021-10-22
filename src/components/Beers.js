import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { listAllBeers } from './../services/beerapi';

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    listAllBeers()
      .then((list) => {
        console.log(list);
        this.setState({ list });
      })
      .catch((error) => {
        console.log(error);
        alert('Something went wrong loading the list of beers.');
      });
  }

  render() {
    return (
      <div className="beerlist">
        <ol>
          {this.state.list.map((beer) => (
            <li key={beer.beerid}>
              <Link to={`/beer/${beer.beerid}`}>{beer.name}</Link>
              <br></br>
              <img src={beer.image} alt="Beer" />
              <br></br>
              <p>{beer.tagline}</p>
              <br></br>
              <p>Contributor of this beer is {beer.contributor}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Beers;
