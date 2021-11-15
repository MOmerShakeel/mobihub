import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Repairs from './Repairs';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Repairs} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;


