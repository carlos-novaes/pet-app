import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <ul>
          <li>
            <img src={require('../img/logo_para_png.png')} alt='Cat and Dog' />
          </li>
          <li className='active'>
            <NavLink to='/'>Início</NavLink>
          </li>
          <li>
            <NavLink to='/About'>Sobre nós</NavLink>
          </li>
          <li>
            <NavLink to='/Payment'>Pagamento</NavLink>
          </li>
          <li>
            <NavLink to='/Apolices'>Apólices Vendidas</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
