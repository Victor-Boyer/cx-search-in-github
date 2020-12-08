import React, { Component } from "react";
import axios from "axios";

class SearchUser extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      username: "",
      response: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    axios
      .post("http://localhost:4000/users", {
        username: this.state.username,
      })
      .then((result) => {
        this.setState({
          loading: false,
          response: result.data,
        });
      });
  };

  render() {
    const { username } = this.state;
    console.log(this.state.response);
    if (!this.state.loading) {
      if (this.state.response.name == "Error") {
        return (
          <div class="row">
            <div class="col s12 m6">
              <div class="card red darken-3">
                <div class="card-content white-text">
                  <span class="card-title">ERROR</span>
                  <p>
                    Oops... Somethings went wrong, are you sure this user exist
                    ?
                  </p>
                </div>
                <div class="card-action">
                  <a href="/">Menu</a>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        try {
          let url = "2;http://localhost:3000/" + this.state.response[0].login;
          return (
            <div className="row">
              <meta http-equiv="refresh" content={url} />
              <div className="col s12 m5">
                <div className="card-panel teal">
                  <span className="white-text">
                    User found ! <h5> Redirection, please wait ...</h5>
                  </span>
                  <span className="white-text">
                    <a href="./">Back to menu</a>
                  </span>
                </div>
              </div>
            </div>
          );
        } catch (err) {
          return (
            <div class="row">
              <div class="col s12 m6">
                <div class="card red darken-3">
                  <div class="card-content white-text">
                    <span class="card-title">ERROR</span>
                    <p>Oops... Somethings went wrong, Retry later !</p>
                    <p>Error : {err};</p>
                  </div>
                  <div class="card-action">
                    <a href="/">Menu</a>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
    }

    return (
      <div id="searchForm" class="container">
        <form class="container" onSubmit={this.onSubmit}>
          <label htmlFor="username">Username</label>
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input
              id="username"
              name="username"
              className="form-control"
              value={username}
              type="text"
              class="validate"
              onChange={this.onChange}
            />
          </div>
          <div className="container">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchUser;
