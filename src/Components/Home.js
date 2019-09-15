import React from 'react';
import Card from './Card';

function Home() {
  return (
    <div>
      <div className='Grid'>
        <img src={require('../img/catdog2.jpeg')} alt='Cat and Dog' />
        <Card />
      </div>
    </div>
  );
}

export default Home;
