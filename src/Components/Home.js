import React from 'react';

function Home() {
  return (
    <div>
      <div className='Grid'>        
        <img src={require('../img/slide1.PNG')} alt='Cat and Dog' />
        <img src={require('../img/slide2.PNG')} alt='Cat and Dog' />
        <img src={require('../img/slide3.PNG')} alt='Cat and Dog' />
        <img src={require('../img/slide4.PNG')} alt='Cat and Dog' />
        <img src={require('../img/slide5.PNG')} alt='Cat and Dog' />
        <img src={require('../img/slide6.PNG')} alt='Cat and Dog' />
      </div>
    </div>
  );
}

export default Home;
