import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Payment from './Components/Payment';
import Apolices from './Components/Apolices';
import Marketplace from './Components/Marketplace';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>        
        <Route path='/about' component={About} />
        <Route path='/Marketplace' component={Marketplace} />
        <Route path='/payment' component={Payment} />
        <Route path='/apolices' component={Apolices} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
