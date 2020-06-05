import React, { useEffect } from 'react';
import './App.css';
import model from './model';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/layout/Header';
import About from './components/About';
import Protected from './components/Protected';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreProvider, createStore } from 'easy-peasy';
import axios from 'axios';
const store = createStore(model);


function App() {

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}`)
      console.log(res.data);
    }
    fetchData();
  }, [])
  return (
    <StoreProvider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Protected Cmp={Home} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </StoreProvider>

  );
}

export default App;
