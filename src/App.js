import React from 'react';
import {IconStyle} from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './application/Home';
import Rank from './application/Rank';
import Singers from './application/Singers';
import Recommend from './application/Recommend';
import store from './store/index'
import {Link} from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className='App'>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <Home />
        <Switch>
          <Route path='/singers' component={Singers} />
          <Route path='/rank' component={Rank} />
          <Route path='/recommend' component={Recommend} />
        </Switch>
      </div>
      </Router>
      </Provider>
  );
}

export default App;
