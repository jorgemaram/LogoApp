import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import data from '../data.json'
import Home from './Home/Home';
import Navbar from './layout/Navbar/Navbar';
import Footer from './layout/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path='/' exact render={() => <Home products={data}/>} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
