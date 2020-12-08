import React, { Component } from "react";
import axios from "axios";

class SingleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      response: {},
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.username);
    const username = this.props.match.params.username;
    axios.get("http://localhost:4000/users/" + username + "").then((res) => {
      console.log(res);
      this.setState({
        loading: false,
        response: res.data,
      });
    });
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="head box">
          <img
            id="formImg"
            src={this.state.response[0].avatar_url}
            alt="Card image cap"
          />
          <span className="white-text text-darken-2">
            <h1> {this.state.response[0].login} </h1>
          </span>
        </div>
        <div>
          <table id="table" className="center #616161 grey darken-2 striped">
            <thead>
              <tr>
                <th>Arg</th>
                <th>User</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>ID</td>
                <td>{this.state.response[0].id}</td>
              </tr>
              <tr>
                <td>Node_ID</td>
                <td>{this.state.response[0].node_id}</td>
              </tr>
              <tr>
                <td>URL</td>
                <td>{this.state.response[0].url}</td>
              </tr>
              <tr>
                <td>HTML_URL</td>
                <td>{this.state.response[0].html_url}</td>
              </tr>
              <tr>
                <td>Following_url</td>
                <td>{this.state.response[0].following_url}</td>
              </tr>
              <tr>
                <td>Starred_url</td>
                <td>{this.state.response[0].starred_url}</td>
              </tr>
              <tr>
                <td>Subscriptions_url</td>
                <td>{this.state.response[0].subscriptions_url}</td>
              </tr>
              <tr>
                <td>organizations_url</td>
                <td>{this.state.response[0].organizations_url}</td>
              </tr>
              <tr>
                <td>repos_url</td>
                <td>{this.state.response[0].repos_url}</td>
              </tr>
              <tr>
                <td>events_url</td>
                <td>{this.state.response[0].events_url}</td>
              </tr>
              <tr>
                <td>received_events_url</td>
                <td>{this.state.response[0].received_events_url}</td>
              </tr>
              <tr>
                <td>type</td>
                <td>{this.state.response[0].type}</td>
              </tr>
              <tr>
                <td>site_admin</td>
                <td>{this.state.response[0].site_admin}</td>
              </tr>
              <tr>
                <td>company</td>
                <td>{this.state.response[0].company}</td>
              </tr>
              <tr>
                <td>blog</td>
                <td>{this.state.response[0].blog}</td>
              </tr>
              <tr>
                <td>location</td>
                <td>{this.state.response[0].location}</td>
              </tr>
              <tr>
                <td>email</td>
                <td>{this.state.response[0].email}</td>
              </tr>
              <tr>
                <td>hireable</td>
                <td>{this.state.response[0].hireable}</td>
              </tr>
              <tr>
                <td>bio</td>
                <td>{this.state.response[0].bio}</td>
              </tr>
              <tr>
                <td>twitter_username</td>
                <td>{this.state.response[0].twitter_username}</td>
              </tr>
              <tr>
                <td>public_repos</td>
                <td>{this.state.response[0].public_repos}</td>
              </tr>
              <tr>
                <td>public_gists</td>
                <td>{this.state.response[0].public_gists}</td>
              </tr>
              <tr>
                <td>followers</td>
                <td>{this.state.response[0].followers}</td>
              </tr>
              <tr>
                <td>following</td>
                <td>{this.state.response[0].following}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SingleUser;
