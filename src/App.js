import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import AuthPage from './pages/auth/auth.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;
