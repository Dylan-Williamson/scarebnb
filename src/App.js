import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './containers/Home';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Redirect from="*" to={"/"}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
