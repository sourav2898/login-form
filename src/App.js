import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Reg from './Reg';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/reg" component={Reg} />
        <Redirect path="/" />
      </Switch>
    </>
  )
}

export default App;
