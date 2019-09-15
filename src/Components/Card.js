import React from 'react';
import { NavLink } from 'react-router-dom';
import ApolicesVendidas from './ApolicesVendidas';

const Card = () => {
  return (
    <div>
      <h2>Assistencia Pet Help</h2>
      <h3>
        Ajudamos você a cuidar do seu animalzinho garantindo benefícios,
        tranquilidade e conforto.
      </h3>
      <strong>
        <p>Serviços atendidos:</p>
        <ul>
          <li>Transport veterinário emergencial</li>
          <li>Assistencia veterinária emergencial</li>
          <li>Agendamento e consultas veterinárias</li>
          <li>Informações sobre vacinas e aplicação em domicílio</li>
          <li>Envio de ração e etc.</li>
        </ul>
      </strong>

      <h1>35,90</h1>

      <NavLink className='contratar' to='/Payment'>
        Contratar
      </NavLink>
      <ApolicesVendidas />
    </div>
  );
};

export default Card;
