import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Payment from './Components/Payment';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/payment' component={Payment} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
