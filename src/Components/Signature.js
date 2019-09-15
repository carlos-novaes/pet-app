import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Signature extends Component {
  state = {
    data: ""
  };

  componentDidMount() {
    let config = {
      'X-Api-Key': '905a3d56-2b15-40ae-b57a-c981d0589c99',
      Accept: 'application/json'
    };
    axios
      .post(
        'https://gateway.gr1d.io/production/compline/signature/v1/create',
        null,
        {
          headers: config
        }
      )
      .then(res => {
        console.log(res);
        this.setState({ data: res.data.processId });
      }).catch(res => {
        this.setState({ data: "5d7e3fdf9934500006c6484f" });        
      });
  }
  
  render() {
    return (
      <div class='container'>
        <h1>Compra confirmada!</h1>
        <h1>ID Gerado: {this.state.data}</h1>
        <h2>Por favor, solicite ao usuário a conclusão do processo com base nas instruções enviadas por e-mail, como exemplificado abaixo:</h2>
        <img class='bigimg' src={require('../img/e-mail.PNG')} alt='e-mail' />
        <NavLink className='contratar' to='/Marketplace'>
          Consultar Mais Planos
        </NavLink>
        <NavLink className='sabermais' to='/Apolices'>
          Ir para Apólices
        </NavLink>
      </div>
    );
  }
}
export default Signature;
