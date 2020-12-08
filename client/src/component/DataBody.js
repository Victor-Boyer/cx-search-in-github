import axios from "axios";
import React, { Component } from "react";
import ListUsers from "./ListUsers";
import ListUser from "./ListUser";

class DataBody extends Component {
  //initialize props and class status
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userData: {},
    };
  }

  //get data from API
  componentDidMount() {
    axios.get("http://localhost:4000/home").then((res) => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      console.log(res);
      this.setState({
        loading: false,
        userData: res.data,
      });
    });
  }

  //html returned by the class
  render() {
    if (this.state.loading === true) {
      return (
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      );
    }

    return (
      <div>
        <h5 id="title">List of all users already searched : </h5>
        <div>
          <ListUsers>
            {this.state.userData.map((user) => (
              <ListUser
                name={user.login}
                pic={user.avatar_url}
                id={user.id}
              ></ListUser>
            ))}
          </ListUsers>
        </div>
      </div>
    );
  }
}

export default DataBody;
