import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Payment from './Components/Payment';
import Apolices from './Components/Apolices';
import Marketplace from './Components/Marketplace';
import MediaCard from './Components/MediaCard';
import Signature from './Components/Signature';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>       
        <Route exact path='/' component={Home} /> 
        <Route path='/about' component={About} />
        <Route path='/Marketplace' component={Marketplace} />
        <Route path='/payment' component={Payment} />
        <Route path='/apolices' component={Apolices} />
        <Route path='/mediacard' component={MediaCard}/>
        <Route path='/Signature' component={Signature}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
