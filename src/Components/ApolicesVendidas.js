import React, { Component } from 'react';
import axios from 'axios';

class ApolicesVendidas extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    let config = {
      'x-api-key': '8786dcf3-48c4-47b2-b5da-002681d11b50',
      Accept: 'application/json'
    };
    axios
      .get(
        'https://gateway.gr1d.io/sandbox/solutionsone/petstandard/v1/Policies',
        {
          headers: config
        }
      )
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      });
  }
  render() {
    return (
      <div>
        {this.state.data.map(policie => (
          <li>{policie.Id}</li>
        ))}
      </div>
    );
  }
}
export default ApolicesVendidas;
