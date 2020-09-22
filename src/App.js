import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav.js';
import About from './pages/about.js';
import Shop from './pages/shop.js';
import ItemDetail from './pages/itemDetail.js';

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
