import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper #9e9e9e grey">
          <a href="/" class="brand-logo">
            GITHUB FINDER
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="/search">
                <i class="material-icons">search</i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="material-icons">refresh</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
