import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Container from '../container/Container';
import Login from '../components/Login';
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState';


const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />       
          <Route exact path="/container" component={Container} />       
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;