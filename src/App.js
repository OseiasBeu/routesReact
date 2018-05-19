import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import View1 from './View1';
import View2 from './View2';
import View3 from './View3';


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/page1">Page 1</Link>
          <Link to="/page2">Page 2</Link>
          <Link to="/page3">Page 3</Link>
          
        </header>

        <main>
          <Switch>
            <Route path="/page1" component={View1}/>
            <Route path="/page2" component={View2}/>
            <Route path="/page3" component={View3}/>
          </Switch>
        </main>

        <footer>
          They Laughed when I Sat Down At the Piano But When I Started to Play!
        </footer>
      </div>
    );
  }
}

export default App;
