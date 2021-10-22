import React from 'react';
import { Component } from 'react';
import { loadBeer } from './../services/beerapi';

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    console.log('Component did mount');
    this.loadBeerDetail();
  }

  // If state or props of component changes,
  // component gets rerendered and componentDidUpdate is executed
  componentDidUpdate(previousProps, previousState) {
    console.log('Component did update');
    console.log(this.props.match.params.id);
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadBeerDetail();
    }
  }

  loadBeerDetail() {
    loadBeer(this.props.match.params.beerid).then((beer) => {
      console.log(beer);
      this.setState({ beer });
    });
  }

  render() {
    return (
      (this.state.beer && (
        <div className="beerdetails">
          <h1>{this.state.beer.name}</h1>
          <br></br>
          <img src={this.state.beer.image} alt="Beer" />
          <br></br>
          <p>{this.state.beer.tagline}</p>
          <br></br>
          <p>Contributor of this beer is {this.state.beer.contributor}</p>
          <br></br>
          <p>First brewed: {this.state.beer.firstbrewed}</p>
          <br></br>
          <p>Attenuation level: {this.state.beer.attlev}</p>
          <br></br>
          <p>Description: {this.state.beer.description}</p>
        </div>
      )) || <h1>Loading...</h1>
    );
  }
}

export default BeerDetail;
