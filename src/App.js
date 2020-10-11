import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';

import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <Route path="/profile/" component={Profile}/>
        <Route path="/dialogs/" component={Dialogs}/>

        <Footer />
      </div>
    </BrowserRouter>
      
  );
}

export default App;
