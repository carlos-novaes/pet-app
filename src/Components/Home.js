import React from 'react';
import Card from './Card';
import Cardlist from './Cardlist';

function Home() {
  return (
    <div>
      <div className='Grid'>        
        <Cardlist />
      </div>
    </div>
  );
}

export default Home;
