import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';


// Default Page - Home Componant = Path='/' 
// Application logic
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch> 
          <Route exact path='/'>                <Home/>           </Route>       
          <Route exact path='/About'>           <About/>          </Route>
          <Route exact path='/Projects'>        <Projects/>       </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
