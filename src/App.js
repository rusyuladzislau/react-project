import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route} from 'react-router-dom'

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Music from './components/Music/Music';


function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <Redirect exact from="/" to="/profile/" 
          render={() => 
            <Profile 
              state={props.state.profilePage}
              dispatch={props.dispatch}
            />
          }/>
        <Route path="/profile/" 
          render={() => 
            <Profile 
              state={props.state.profilePage}
              dispatch={props.dispatch}
            />
          }/>
        <Route path="/dialogs/" 
          render={() => <Dialogs state={props.state.dialogsPage}/>}/>
        <Route path="/music/" 
          render={() => <Music />}/>

        <Footer />
      </div>
    </BrowserRouter>
      
  );
}

export default App;
