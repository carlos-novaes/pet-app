import React, { Component } from 'react';
import axios from 'axios';

class Apolices extends Component {
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
        <h1>Relação de Apólices</h1>
        <table>
          <th>Nome</th>
          <th>ID</th>
          <th>Status</th>

          {this.state.data.map(policie => (
            <tr>
              <td>{policie.Customer.Name}</td>
              <td>{policie.Id}</td>
              <td>{policie.Status}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default Apolices;
