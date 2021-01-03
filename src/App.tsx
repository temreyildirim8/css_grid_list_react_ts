// tslint:disable: jsx-no-lambda

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Detail from './pages/Dashboard/Detail/Detail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header title={''} description={''} />
      <Switch>
        <Route path='/' component={Dashboard} exact={true} />
        <Route path='/detail' component={Detail} exact={true} />
        <Route path='/default' render={() => <Redirect to='/' />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
