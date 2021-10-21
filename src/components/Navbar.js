import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            Home
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/beers">
                Beers <span class="sr-only"></span>
              </a>
              <a class="nav-item nav-link active" href="/random-beer">
                Random Beer <span class="sr-only"></span>
              </a>
              <a class="nav-item nav-link active" href="/new-beer">
                New Beer <span class="sr-only"></span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
