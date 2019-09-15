import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Assistencia Pet Help</h2>
      <h3>
        {props.description}
      </h3>
      <h1>{props.price}</h1>
      <NavLink className='contratar' to='/Payment'>
        Contratar
      </NavLink>
      <NavLink className='sabermais' to='/Payment'>
        Saiba Mais
      </NavLink>
    </div>
  );
};

export default Card;
